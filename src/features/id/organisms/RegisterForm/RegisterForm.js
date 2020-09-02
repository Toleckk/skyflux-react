import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Divider, Input, Text} from '../../../../ui'
import {SubmitButton} from '../../atoms'

export const RegisterForm = withTranslation('id')(({t}) => (
  <>
    <Divider />
    <Flex width="90%" justifyContent="space-between" alignItems="center">
      <Box flex={1} marginRight="2rem">
        <Text as="label" for="email">
          {t('Enter your email')}
        </Text>
      </Box>
      <Box width="40%">
        <Input id="email" name="email" label={t('Электронная почта')} />
      </Box>
    </Flex>
    <Divider />
    <Flex width="90%" justifyContent="space-between" alignItems="center">
      <Box flex={1} marginRight="2rem">
        <Text as="label" for="password">
          {t('Password should be')}
        </Text>
      </Box>
      <Box width="40%">
        <Input
          id="password"
          name="password"
          label={t('Password')}
          type="password"
        />
      </Box>
    </Flex>
    <Divider />
    <SubmitButton>{t('Next')}</SubmitButton>
  </>
))
