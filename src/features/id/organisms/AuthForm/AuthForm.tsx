import React, {useMemo} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {login, password} from 'validation'
import {mergeErrors} from 'utils'
import {Input} from 'ui'
import {useLogin} from 'features/shared/hooks'
import {CreateSessionVariables} from 'features/shared/graphql'
import {SubmitButton} from '../../atoms'

const schema = yup
  .object()
  .shape({login: login.required(), password: password.required()})

export const AuthForm: React.FC = () => {
  const {login, error} = useLogin()

  const {
    handleSubmit,
    register,
    errors: formErrors,
  } = useForm<CreateSessionVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const errors = mergeErrors(error, formErrors)

  const onSubmit = useMemo(
    () => handleSubmit(variables => login({variables})),
    [handleSubmit, login],
  )

  return (
    <form onSubmit={onSubmit}>
      <Translation ns="id">
        {t => (
          <Flex flexDirection="column">
            <Input
              label={t('Login')}
              name="login"
              ref={register}
              error={t(errors.login as string)}
            />
            <Box marginTop="1rem">
              <Input
                label={t('Password')}
                name="password"
                type="password"
                error={t(errors.password as string)}
                ref={register}
              />
            </Box>
            <Box marginTop="2rem" alignSelf="center">
              <SubmitButton>{t('Sign in')}</SubmitButton>
            </Box>
          </Flex>
        )}
      </Translation>
    </form>
  )
}
