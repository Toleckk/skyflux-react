import React from 'react'
import {useParams} from 'react-router'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {SubmitButton} from '../../atoms'
import {Input} from '../../../../ui'

export const ResetForm = () => {
  const {t} = useTranslation('id')
  const {token} = useParams()

  return (
    <form>
      <input name="token" hidden readOnly value={token} />
      <Flex flexDirection="column">
        <Box marginTop="1em">
          <Input label={t('Password')} type="password" />
        </Box>
        <Box marginTop="1em">
          <Input label={t('Confirm password')} type="password" />
        </Box>
        <Box marginTop="1.5em" alignSelf="center">
          <SubmitButton>{t('Next')}</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
}
