import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {useMyTitle} from 'features/shared/hooks'
import {H1} from 'typography'
import {Divider, Link} from 'ui'
import {AuthForm} from '../../organisms'
import {FieldDescription, PageDescription, SubmitButton} from '../../atoms'

export const Auth: React.FC = () => {
  const {t} = useTranslation('id')
  useMyTitle(t('Log in'))

  return (
    <Flex alignItems="center" flexDirection="column">
      <H1 center>{t('Let people know about your thoughts')}</H1>
      <PageDescription>{t('Log in to your account now!')}</PageDescription>
      <Divider />
      <AuthForm />
      <Box marginTop="1rem" alignSelf="center">
        <Link to="/id/restore">{t('Forgot password?')}</Link>
      </Box>
      <Divider />
      <FieldDescription>{t('Not with us? Join!')}</FieldDescription>
      <Box marginTop="1rem">
        <SubmitButton as={RouterLink} to="/id/register">
          {t('Sign up')}
        </SubmitButton>
      </Box>
    </Flex>
  )
}
