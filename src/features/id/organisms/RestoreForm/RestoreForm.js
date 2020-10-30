import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import * as yup from 'yup'
import {login} from 'validation'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {Input} from 'ui'
import {useMyMutation} from 'features/common/hooks'
import {createResetRequest} from 'models/reset'
import {FieldDescription, SubmitButton} from '../../atoms'

const schema = yup.object().shape({login: login.required()})

export const RestoreForm = withTranslation('id')(({t}) => {
  const {handleSubmit, register, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const [createRequest] = useMyMutation(createResetRequest())

  const onSubmit = useCallback(handleSubmit(createRequest), [
    handleSubmit,
    createRequest,
  ])

  return (
    <Flex flexDirection="column" alignItems="center">
      <FieldDescription>{t('Enter nickname or email')}</FieldDescription>
      <Box marginTop="1em">
        <form onSubmit={onSubmit}>
          <Input
            label={t('Login')}
            name="login"
            ref={register}
            error={errors.login?.message}
          />
          <Flex marginTop="1.5em" justifyContent="center">
            <SubmitButton>{t('Next')}</SubmitButton>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
})
