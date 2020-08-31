import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {withTranslation} from 'react-i18next'
import {AuthForm} from '../../organisms'
import {FieldDescription, PageDescription, SubmitButton} from '../../atoms'
import {Divider, H1, Link} from '../../../../ui'

export const Auth = withTranslation('id')(({t}) => (
  <Flex alignItems="center" flexDirection="column">
    <H1>{t('Let people know about your thoughts')}</H1>
    <PageDescription>{t('Log in to your account now!')}</PageDescription>
    <Divider />
    <Box width="35%">
      <AuthForm />
    </Box>
    <Box marginTop="15px" alignSelf="center">
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
))
