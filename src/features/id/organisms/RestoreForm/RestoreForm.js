import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {Input} from 'ui'
import {FieldDescription, SubmitButton} from '../../atoms'

const schema = yup.object().shape({
  login: yup
    .string()
    .required()
    .or(
      [
        yup.string().email(),
        yup
          .string()
          .matches(
            /^(?!.*__)(?!_)(?!.*_$)(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9._]{5,69}$/,
          ),
      ],
      'Invalid login',
    ),
})

export const RestoreForm = withTranslation('id')(({t}) => {
  const {handleSubmit, register, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

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
