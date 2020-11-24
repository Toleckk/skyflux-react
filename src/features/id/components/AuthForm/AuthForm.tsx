import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Input} from 'ui'
import {useAuthForm} from 'features/shared/hooks'
import {SubmitButton} from '../SubmitButton'

export const AuthForm: React.FC = () => {
  const {t} = useTranslation('id')

  const {submit, errors, register} = useAuthForm()

  return (
    <form onSubmit={submit}>
      <Flex flexDirection="column">
        <Input
          label={t('Login')}
          name="login"
          ref={register}
          error={t(errors.login)}
        />
        <Box marginTop="1rem">
          <Input
            label={t('Password')}
            name="password"
            type="password"
            error={t(errors.password)}
            ref={register}
          />
        </Box>
        <Box marginTop="2rem" alignSelf="center">
          <SubmitButton>{t('Sign in')}</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
}
