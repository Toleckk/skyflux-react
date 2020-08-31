import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {PageDescription} from '../../atoms'
import {Divider, H1, Text} from '../../../../ui'

export const Message = withTranslation('id')(({t}) => (
  <Flex flexDirection="column" alignItems="center">
    <H1>{t('Password restoring')}</H1>
    <PageDescription>{t('Check your email')}</PageDescription>
    <Divider />
    <Box width="60%" margin="3rem">
      <Text>{t('We have sent email to you')}</Text>
    </Box>
    <Divider />
  </Flex>
))
