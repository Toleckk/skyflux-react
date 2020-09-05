import React from 'react'
import {useTranslation} from 'react-i18next'
import {User} from 'models/user'
import {Button} from 'ui'
import {useMyMutation} from 'features/common/hooks'
import {createSubscription, removeSubscription} from 'models/subscription'

export const SubscribeButton = ({user}) => {
  const {t} = useTranslation('user')

  const [subscribe] = useMyMutation(createSubscription({userId: user._id}))
  const [unsubscribe] = useMyMutation(removeSubscription({userId: user._id}))

  return (
    <Button
      onClick={user.amISubscribed ? () => unsubscribe() : () => subscribe()}
    >
      {t(user.amISubscribed ? 'Do not read' : 'Read')}
    </Button>
  )
}

SubscribeButton.propTypes = {
  user: User.isRequired,
}
