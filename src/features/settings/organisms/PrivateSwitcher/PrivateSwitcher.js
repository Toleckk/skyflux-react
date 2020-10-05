import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useMyMutation} from 'features/common/hooks'
import {makeAccountPrivate, makeAccountPublic, User} from 'models/user'
import {H2, Toggle} from 'ui'

export const PrivateSwitcher = ({user}) => {
  const {t} = useTranslation('settings')

  const [makePublic, {loading: loadingPublic}] = useMyMutation(
    makeAccountPublic(),
  )
  const [makePrivate, {loading: loadingPrivate}] = useMyMutation(
    makeAccountPrivate(),
  )

  const onChange = useCallback(
    e => (e.target.checked ? makePrivate() : makePublic()),
    [makePrivate, makePublic],
  )

  return (
    <Flex alignItems="center">
      <H2>{t('Private profile')}</H2>
      <Box marginLeft="2rem">
        <Toggle
          onChange={onChange}
          defaultChecked={user.private}
          disabled={loadingPrivate || loadingPublic}
        />
      </Box>
    </Flex>
  )
}

PrivateSwitcher.propTypes = {
  user: User.isRequired,
}
