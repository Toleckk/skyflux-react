import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Divider, H1, H2, Toggle} from 'ui'
import {ChangePasswordForm, ProfileDataForm} from '../../organisms'

const user = {
  _id: '1',
  nickname: 'toleckk',
  avatar:
    'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  description: {},
}

export const Common = withTranslation('settings')(({t}) => (
  <div>
    <H1>{t('Profile information')}</H1>
    <ProfileDataForm user={user} />
    <Divider />
    <H1>{t('Privacy settings')}</H1>
    <Flex alignItems="center">
      <H2>{t('Private profile')}</H2>
      <Box marginLeft="2rem">
        <Toggle />
      </Box>
    </Flex>
    <Divider />
    <H1>{t('Login data')}</H1>
    <ChangePasswordForm />
    <Divider />
  </div>
))
