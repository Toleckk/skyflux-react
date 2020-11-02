import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useMyTitle} from 'features/common/hooks'
import {Divider, H1} from 'ui'
import {FieldDescription, PageDescription} from '../../atoms'
import {ResetForm} from '../../organisms'

export const Reset = withTranslation('id')(({t}) => {
  useMyTitle(t('Restoring'))

  return (
    <Flex flexDirection="column" alignItems="center">
      <H1 center>{t('Create new password')}</H1>
      <PageDescription>{t('Active sessions will be canceled')}</PageDescription>
      <Divider />
      <FieldDescription>{t('Password should be')}</FieldDescription>
      <ResetForm />
      <Divider />
    </Flex>
  )
})
