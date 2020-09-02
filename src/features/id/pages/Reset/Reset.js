import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Divider, H1} from 'ui'
import {FieldDescription, PageDescription} from '../../atoms'
import {ResetForm} from '../../organisms'

export const Reset = withTranslation('id')(({t}) => (
  <Flex flexDirection="column" alignItems="center">
    <H1>{t('Create new password')}</H1>
    <PageDescription>{t('Active sessions will be canceled')}</PageDescription>
    <Divider />
    <FieldDescription>{t('Password should be')}</FieldDescription>
    <Box width="35%">
      <ResetForm />
    </Box>
    <Divider />
  </Flex>
))
