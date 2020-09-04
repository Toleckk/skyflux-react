import React from 'react'
import {useTranslation} from 'react-i18next'
import {User} from 'models/user'
import {Button} from 'ui'

export const SubscribeButton = ({user}) => {
  const {t} = useTranslation('user')

  return <Button>{t(user.amISubscribed ? 'Do not read' : 'Read')}</Button>
}

SubscribeButton.propTypes = {
  user: User.isRequired,
}
