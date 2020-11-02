import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useMyTitle} from 'features/common/hooks'
import {Divider, H1} from 'ui'
import {PageDescription} from '../../atoms'
import {RestoreForm} from '../../organisms'

export const Restore = withTranslation('id')(({t}) => {
  useMyTitle(t('Resetting'))

  return (
    <Flex flexDirection="column" alignItems="center">
      <H1 center>{t('Enter restore data')}</H1>
      <PageDescription>{t('Procedure will restore access')}</PageDescription>
      <Divider />
      <RestoreForm />
      <Divider />
    </Flex>
  )
})
