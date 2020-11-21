import React from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'ui'
import {useToggleSubscribe} from '../../hooks'
import {User_user} from '../../graphql'

export type SubscribeButtonProps = {
  user: User_user
  className?: string
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  user,
  className,
}) => {
  const {t} = useTranslation('user')

  const {toggle} = useToggleSubscribe(user)

  const text = !user.mySub
    ? 'Read'
    : user.mySub.accepted
    ? 'Do not read'
    : 'Cancel'

  return (
    <Button onClick={toggle} className={className}>
      {t(text)}
    </Button>
  )
}
