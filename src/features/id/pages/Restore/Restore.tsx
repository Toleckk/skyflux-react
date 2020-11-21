import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useMyTitle} from 'features/shared/hooks'
import {H1} from 'typography'
import {Divider} from 'ui'
import {PageDescription} from '../../atoms'
import {RestoreForm} from '../../organisms'

export const Restore: React.FC = () => {
  const {t} = useTranslation('id')
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
}
