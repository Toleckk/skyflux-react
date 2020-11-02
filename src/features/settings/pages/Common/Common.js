import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {withTranslation} from 'react-i18next'
import {useMyQuery, useMyTitle} from 'features/common/hooks'
import {me} from 'models/user'
import {Divider, H1, Loader} from 'ui'
import {
  ChangeNicknameForm,
  ChangePasswordForm,
  PrivateSwitcher,
  ProfileDataForm,
} from '../../organisms'
import {StyledItem} from './styles'

export const Common = withTranslation('settings')(({t}) => {
  useMyTitle(t('Settings'))

  const {data, loading} = useMyQuery(me())

  const user = data?.me

  if (loading) return <Loader />

  return (
    <ul>
      <StyledItem>
        <H1>{t('Profile information')}</H1>
        <ProfileDataForm user={user} />
      </StyledItem>
      <Divider />
      <StyledItem>
        <H1>{t('Change nickname')}</H1>
        <ChangeNicknameForm user={user} />
      </StyledItem>
      <Divider />
      <StyledItem>
        <H1>{t('Privacy settings')}</H1>
        <PrivateSwitcher user={user} />
      </StyledItem>
      <Divider />
      <StyledItem>
        <H1>{t('Login data')}</H1>
        <ChangePasswordForm />
      </StyledItem>
      <Divider />
    </ul>
  )
})
