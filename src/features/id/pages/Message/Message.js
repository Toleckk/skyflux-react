import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Divider, H1, Text} from 'ui'
import {PageDescription} from '../../atoms'

export const Message = withTranslation('id')(({t}) => (
  <Flex flexDirection="column" alignItems="center">
    <H1 center>{t('Password restoring')}</H1>
    <PageDescription>{t('Check your email')}</PageDescription>
    <Divider />
    <Box width="60%" margin="3rem">
      <Text>{t('We have sent email to you')}</Text>
    </Box>
    <Divider />
  </Flex>
))
