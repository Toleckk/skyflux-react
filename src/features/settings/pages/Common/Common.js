import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Button, Divider, H1, H2, Input, Toggle} from '../../../../ui'
import {AvatarUploader, DateInput} from '../../molecules'

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
    <Box>
      <Flex justifyContent="space-between" marginBottom="1rem">
        <Box width="9rem" height="9rem">
          <AvatarUploader value={user.avatar} />
        </Box>
        <Box width="50%">
          <DateInput label={t('Birthdate')} placeholderText="" />
          <Input label={t('From')} />
        </Box>
      </Flex>
      <Input multi />
    </Box>
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
    <Box width="40%">
      <Input type="password" label={t('Old password')} />
      <Box marginTop="1rem">
        <Input type="password" label={t('New password')} />
      </Box>
      <Box marginTop="1rem">
        <Button>{t('Change')}</Button>
      </Box>
    </Box>
    <Divider />
  </div>
))
