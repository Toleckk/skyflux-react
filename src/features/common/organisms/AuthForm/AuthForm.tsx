import React, {Suspense, useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {Translation} from 'react-i18next'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {login, password} from 'validation'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {Button, Input, Link, Loader} from 'ui'
import {useLogin} from 'features/shared/hooks'
import {CreateSessionVariables} from 'features/shared/graphql'

const schema = yup
  .object()
  .shape({login: login.required(), password: password.required()})

export const AuthForm: React.FC = () => {
  const {login} = useLogin()

  const {handleSubmit, register, errors} = useForm<CreateSessionVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = useMemo(
    () => handleSubmit(variables => login({variables})),
    [handleSubmit, login],
  )

  return (
    <Suspense fallback={<Loader />}>
      <Translation ns="id">
        {t => (
          <form onSubmit={onSubmit}>
            <Input
              ref={register}
              error={errors.login?.message}
              name="login"
              label={t('Login')}
            />
            <Box marginTop="1rem">
              <Input
                ref={register}
                label={t('Password')}
                error={errors.password?.message}
                name="password"
                type="password"
              />
            </Box>
            <Flex marginTop="1rem" justifyContent="space-between">
              <RouterLink to="/id/register">
                <Button>{t('Sign up')}</Button>
              </RouterLink>
              <Button type="submit">{t('Sign in')}</Button>
            </Flex>
            <Flex marginTop="1rem" justifyContent="flex-end">
              <Link to="/id/restore">{t('Forgot password?')}</Link>
            </Flex>
          </form>
        )}
      </Translation>
    </Suspense>
  )
}
