import React from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {User} from 'models/user'
import {Button} from 'ui'
import {useMyMutation} from 'features/shared/hooks'
import {createSub, deleteSub} from 'models/sub'

export const SubscribeButton = ({user, className}) => {
  const {t} = useTranslation('user')

  const [subscribe] = useMyMutation(createSub({nickname: user.nickname}))
  const [unsubscribe] = useMyMutation(deleteSub({nickname: user.nickname}))

  const onClick = () => (user.mySub ? unsubscribe() : subscribe())
  const text = !user.mySub
    ? 'Read'
    : user.mySub.accepted
    ? 'Do not read'
    : 'Cancel'

  return (
    <Button onClick={onClick} className={className}>
      {t(text)}
    </Button>
  )
}

SubscribeButton.propTypes = {
  user: User.isRequired,
  className: PropTypes.string,
}
