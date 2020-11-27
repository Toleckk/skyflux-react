import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useMyTitle} from '@skyflux/react/features/shared/hooks'
import {H1} from '@skyflux/react/typography'
import {Divider} from '@skyflux/react/ui'
import {PageDescription, RestoreForm} from '../../components'

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
