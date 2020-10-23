import React from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {User} from 'models/user'
import {Button} from 'ui'
import {useMyMutation} from 'features/common/hooks'
import {createSub, deleteSub} from 'models/sub'

export const SubscribeButton = ({user, className}) => {
  const {t} = useTranslation('user')

  const [subscribe] = useMyMutation(createSub({nickname: user.nickname}))
  const [unsubscribe] = useMyMutation(deleteSub({nickname: user.nickname}))

  return (
    <Button
      onClick={user.isSubscribedByMe ? () => unsubscribe() : () => subscribe()}
      className={className}
    >
      {t(user.isSubscribedByMe ? 'Do not read' : 'Read')}
    </Button>
  )
}

SubscribeButton.propTypes = {
  user: User.isRequired,
  className: PropTypes.string,
}
