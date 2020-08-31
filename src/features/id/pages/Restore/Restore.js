import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {PageDescription} from '../../atoms'
import {Divider, H1} from '../../../../ui'
import {RestoreForm} from '../../organisms'

export const Restore = withTranslation('id')(({t}) => (
  <Flex flexDirection="column" alignItems="center">
    <H1>{t('Enter restore data')}</H1>
    <PageDescription>{t('Procedure will restore access')}</PageDescription>
    <Divider />
    <RestoreForm />
    <Divider />
  </Flex>
))
