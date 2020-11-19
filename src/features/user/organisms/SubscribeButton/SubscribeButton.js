import React from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {User} from 'models/user'
import {Button} from 'ui'
import {useToggleSubscribe} from '../../hooks'

export const SubscribeButton = ({user, className}) => {
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

SubscribeButton.propTypes = {
  user: User.isRequired,
  className: PropTypes.string,
}
