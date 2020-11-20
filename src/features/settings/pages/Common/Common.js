import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {useTranslation} from 'react-i18next'
import {useQuery} from '@apollo/client'
import {useMyTitle} from 'features/shared/hooks'
import {H1} from 'typography'
import {Divider, Loader} from 'ui'
import {
  ChangeNicknameForm,
  ChangePasswordForm,
  PrivateSwitcher,
  ProfileDataForm,
} from '../../organisms'
import {MY_PROFILE} from '../../graphql'
import {StyledItem} from './styles'

export const Common = () => {
  const {t} = useTranslation('settings')
  useMyTitle(t('Settings'))

  const {data, loading} = useQuery(MY_PROFILE)
  const me = data?.me

  if (loading) return <Loader />

  return (
    <ul>
      <StyledItem>
        <H1>{t('Profile information')}</H1>
        <ProfileDataForm user={me} />
      </StyledItem>
      <Divider />
      <StyledItem>
        <H1>{t('Change nickname')}</H1>
        <ChangeNicknameForm user={me} />
      </StyledItem>
      <Divider />
      <StyledItem>
        <H1>{t('Privacy settings')}</H1>
        <PrivateSwitcher user={me} />
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
