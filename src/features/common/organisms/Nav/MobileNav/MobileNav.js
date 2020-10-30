import React from 'react'
import useBooleanState from 'use-boolean-state'
import {Modal} from 'ui'
import {me} from 'models/user'
import {useModal, useMyQuery} from '../../../hooks'
import {AuthForm, MobileMenu, NotificationTabs} from '../..'
import {Authorized} from './Authorized'
import {Guest} from './Guest'
import {StyledAuthFormContainer} from './styles'

export const MOBILE_NAV_HEIGHT = '3rem'

export const MobileNav = () => {
  const {data, loading} = useMyQuery(me())
  const {close, isOpened, open} = useModal('notifications')
  const [menuOpened, openMenu, closeMenu] = useBooleanState(false)
  const [authOpened, openAuth, closeAuth] = useBooleanState(false)

  if (loading) return <></>

  return (
    <nav>
      {data.me ? (
        <Authorized onMenuClick={openMenu} onNotificationsClick={open} />
      ) : (
        <Guest onAuthClick={openAuth} />
      )}
      <Modal visible={isOpened} onClose={close} placement="right">
        <NotificationTabs />
      </Modal>
      <Modal visible={menuOpened} onClose={closeMenu} placement="right">
        <MobileMenu onItemClick={closeMenu} />
      </Modal>
      <Modal visible={authOpened} onClose={closeAuth} placement="bottom">
        <StyledAuthFormContainer>
          <AuthForm />
        </StyledAuthFormContainer>
      </Modal>
    </nav>
  )
}
