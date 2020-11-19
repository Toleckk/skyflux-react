import React, {useMemo} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import * as yup from 'yup'
import {login} from 'validation'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {mergeErrors} from 'utils'
import {Input} from 'ui'
import {CREATE_RESET_REQUEST} from 'models/reset'
import {FieldDescription, SubmitButton} from '../../atoms'
import {useMutation} from '@apollo/client'

const schema = yup.object().shape({login: login.required()})

export const RestoreForm = () => {
  const {t} = useTranslation('id')

  const [createRequest, {error}] = useMutation(CREATE_RESET_REQUEST)

  const {handleSubmit, register, errors: formErrors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const errors = mergeErrors(error, formErrors)

  const onSubmit = useMemo(
    () => handleSubmit(variables => createRequest({variables})),
    [handleSubmit, createRequest],
  )

  return (
    <Flex flexDirection="column" alignItems="center">
      <FieldDescription>{t('Enter nickname or email')}</FieldDescription>
      <Box marginTop="1em">
        <form onSubmit={onSubmit}>
          <Input
            label={t('Login')}
            name="login"
            ref={register}
            error={t(errors.login)}
          />
          <Flex marginTop="1.5em" justifyContent="center">
            <SubmitButton>{t('Next')}</SubmitButton>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}
