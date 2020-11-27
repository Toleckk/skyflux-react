import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {useTranslation} from 'react-i18next'
import {useMyTitle} from '@skyflux/react/features/shared/hooks'
import {H1} from '@skyflux/react/typography'
import {Divider, Loader} from '@skyflux/react/ui'
import {StyledItem} from './styles'
import {
  ChangeNicknameForm,
  ChangePasswordForm,
  PrivateSwitcher,
  ProfileDataForm,
} from '../../components'
import {useMyProfile} from '../../hooks'

export const Common: React.FC = () => {
  const {t} = useTranslation('settings')
  useMyTitle(t('Settings'))

  const {loading, user} = useMyProfile()

  if (loading || !user) return <Loader />

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
}
