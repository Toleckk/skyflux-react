import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useMyQuery} from 'features/common/hooks'
import {me} from 'models/user'
import {Divider, H1, H2, Loader, Toggle} from 'ui'
import {ChangePasswordForm, ProfileDataForm} from '../../organisms'

export const Common = withTranslation('settings')(({t}) => {
  const {data, loading} = useMyQuery(me())

  const user = data?.me

  if (loading) return <Loader />

  return (
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
  )
})
