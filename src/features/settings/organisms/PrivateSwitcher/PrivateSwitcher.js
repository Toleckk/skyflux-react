import React, {useCallback} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useConfirmDialog} from 'features/shared/hooks'
import {useMutation} from '@apollo/client'
import {User} from 'models/user'
import {H2} from 'typography'
import {Toggle} from 'ui'
import {MAKE_ACCOUNT_PRIVATE, MAKE_ACCOUNT_PUBLIC} from '../../graphql'
import {StyledResponsibleContainer} from './styles'

export const PrivateSwitcher = ({user}) => {
  const {t} = useTranslation('settings')

  const [makePublic, publicState] = useMutation(MAKE_ACCOUNT_PUBLIC)
  const [makePrivate, privateState] = useMutation(MAKE_ACCOUNT_PRIVATE)

  const [makePublicWithConfirmation, Modal] = useConfirmDialog(makePublic)

  const toggle = useCallback(
    () => (!user.private ? makePrivate() : makePublicWithConfirmation()),
    [makePrivate, makePublicWithConfirmation, user],
  )

  return (
    <StyledResponsibleContainer>
      <H2>{t('Private profile')}</H2>
      <Box marginLeft="2rem">
        <Toggle
          onClick={toggle}
          checked={user.private}
          disabled={publicState.loading || privateState.loading}
          readOnly
        />
      </Box>
      <Modal
        text={t(
          'Are you sure you want to make your account public? All pending sub requests will be accepted',
        )}
        icon="confirm"
      />
    </StyledResponsibleContainer>
  )
}

PrivateSwitcher.propTypes = {
  user: User.isRequired,
}
