import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {withTranslation} from 'react-i18next'
import {useMyQuery} from 'features/common/hooks'
import {me} from 'models/user'
import {Divider, H1, Loader} from 'ui'
import {
  ChangeNicknameForm,
  ChangePasswordForm,
  PrivateSwitcher,
  ProfileDataForm,
} from '../../organisms'

export const Common = withTranslation('settings')(({t}) => {
  const {data, loading} = useMyQuery(me())

  const user = data?.me

  if (loading) return <Loader />

  return (
    <div>
      <H1>{t('Profile information')}</H1>
      <ProfileDataForm user={user} />
      <Divider />
      <H1>{t('Change nickname')}</H1>
      <ChangeNicknameForm user={user} />
      <Divider />
      <H1>{t('Privacy settings')}</H1>
      <PrivateSwitcher user={user} />
      <Divider />
      <H1>{t('Login data')}</H1>
      <ChangePasswordForm />
      <Divider />
    </div>
  )
})
