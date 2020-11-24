import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H2} from 'typography'
import {Toggle} from 'ui'
import {MyProfile_me} from '../../graphql'
import {useTogglePrivate} from '../../hooks'
import {StyledResponsibleContainer} from './styles'

export type PrivateSwitcherProps = {
  user: MyProfile_me
}

export const PrivateSwitcher: React.FC<PrivateSwitcherProps> = ({user}) => {
  const {t} = useTranslation('settings')

  const {togglePrivate, ConfirmMakePublicModal, loading} = useTogglePrivate(
    user,
  )

  return (
    <StyledResponsibleContainer>
      <H2>{t('Private profile')}</H2>
      <Box marginLeft="2rem">
        <Toggle
          onClick={togglePrivate}
          checked={user.private}
          disabled={loading}
          readOnly
        />
      </Box>
      <ConfirmMakePublicModal
        text={t(
          'Are you sure you want to make your account public? All pending sub requests will be accepted',
        )}
        icon="confirm"
      />
    </StyledResponsibleContainer>
  )
}
