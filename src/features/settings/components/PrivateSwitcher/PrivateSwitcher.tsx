import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H2} from '@skyflux/react/typography'
import {Toggle} from '@skyflux/react/ui'
import {StyledResponsibleContainer} from './styles'
import {MyProfile_me} from '../../graphql'
import {useTogglePrivate} from '../../hooks'

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
