import React, {useCallback} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useConfirmDialog, useMyMutation} from 'features/common/hooks'
import {makeAccountPrivate, makeAccountPublic, User} from 'models/user'
import {H2, Toggle} from 'ui'
import {StyledResponsibleContainer} from './styles'

export const PrivateSwitcher = ({user}) => {
  const {t} = useTranslation('settings')

  const [makePublic, {loading: loadingPublic}] = useMyMutation(
    makeAccountPublic(),
  )
  const [makePrivate, {loading: loadingPrivate}] = useMyMutation(
    makeAccountPrivate(),
  )

  const [makePublicWithConfirmation, Modal] = useConfirmDialog(makePublic)

  const onChange = useCallback(
    e => (e.target.checked ? makePrivate() : makePublicWithConfirmation()),
    [makePrivate, makePublicWithConfirmation],
  )

  return (
    <StyledResponsibleContainer>
      <H2>{t('Private profile')}</H2>
      <Box marginLeft="2rem">
        <Toggle
          onChange={onChange}
          checked={user.private}
          disabled={loadingPrivate || loadingPublic}
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
