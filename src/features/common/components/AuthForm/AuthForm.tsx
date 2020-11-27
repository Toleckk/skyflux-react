import React, {Suspense} from 'react'
import {Translation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {Button, Input, Link, Loader} from '@skyflux/react/ui'
import {useAuthForm} from '@skyflux/react/features/shared/hooks'

export const AuthForm: React.FC = () => {
  const {register, submit, errors} = useAuthForm()

  return (
    <Suspense fallback={<Loader />}>
      <Translation ns="id">
        {t => (
          <form onSubmit={submit}>
            <Input
              ref={register}
              error={t(errors.login)}
              name="login"
              label={t('Login')}
            />
            <Box marginTop="1rem">
              <Input
                ref={register}
                label={t('Password')}
                error={t(errors.password)}
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
