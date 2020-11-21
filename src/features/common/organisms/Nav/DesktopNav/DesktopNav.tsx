import React, {useCallback} from 'react'
import useBooleanState from 'use-boolean-state'
import {Box, Flex} from 'reflexbox/styled-components'
import {useOnClickOutside} from 'utils'
import {useMe, useModal} from 'features/shared/hooks'
import {AuthForm, NotificationTabs} from '../..'
import {Authorized} from './Authorized'
import {Guest} from './Guest'

export const DesktopNav: React.FC = () => {
  const {me} = useMe()
  const {isOpened, close} = useModal('notifications')
  const [isAuthFormOpened, , closeAuthForm, toggleAuthForm] = useBooleanState(
    false,
  )

  const closeAllModals = useCallback(() => {
    close()
    closeAuthForm()
  }, [close, closeAuthForm])

  const ref = useOnClickOutside<HTMLDivElement>(closeAllModals)

  return (
    <Flex as="nav" ref={ref}>
      {me ? <Authorized /> : <Guest onAuthClick={toggleAuthForm} />}
      {!me && isAuthFormOpened && (
        <Box padding="0 1rem 1rem">
          <AuthForm />
        </Box>
      )}
      {isOpened && me && (
        <Flex flexDirection="column">
          <Flex flexBasis={0} flexGrow={1} overflowY="hidden">
            <NotificationTabs />
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}
