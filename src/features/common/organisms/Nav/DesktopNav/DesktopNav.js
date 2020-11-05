import React, {useCallback} from 'react'
import useBooleanState from 'use-boolean-state'
import {Box, Flex} from 'reflexbox/styled-components'
import {me} from 'models/user'
import {useOnClickOutside} from 'utils'
import {useModal, useMyQuery} from '../../../hooks'
import {NotificationTabs} from '../../NotificationTabs'
import {AuthForm} from '../../AuthForm'
import {Authorized} from './Authorized'
import {Guest} from './Guest'

export const DesktopNav = () => {
  const {data, loading} = useMyQuery(me())
  const {isOpened, close} = useModal('notifications')
  const [isAuthFormOpened, , closeAuthForm, toggleAuthForm] = useBooleanState(
    false,
  )

  const closeAllModals = useCallback(() => {
    close()
    closeAuthForm()
  }, [close, closeAuthForm])

  const ref = useOnClickOutside(closeAllModals)

  if (loading) return <></>

  return (
    <Flex as="nav" ref={ref}>
      {data.me ? <Authorized /> : <Guest onAuthClick={toggleAuthForm} />}
      {!data.me && isAuthFormOpened && (
        <Box padding="0 1rem 1rem">
          <AuthForm />
        </Box>
      )}
      {isOpened && data.me && (
        <Flex flexDirection="column">
          <Flex flexBasis={0} flexGrow={1} overflowY="hidden">
            <NotificationTabs />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
