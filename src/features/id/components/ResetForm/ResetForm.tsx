import React from 'react'
import {useParams} from 'react-router'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Input} from '@skyflux/react/ui'
import {SubmitButton} from '../SubmitButton'
import {useResetForm} from '../../hooks'

export const ResetForm: React.FC = () => {
  const {t} = useTranslation('id')
  const {token} = useParams<{token: string}>()

  const {submit, register, errors} = useResetForm()

  return (
    <form onSubmit={submit}>
      <input name="token" hidden readOnly value={token} ref={register} />
      <Flex flexDirection="column">
        <Box marginTop="1em">
          <Input
            label={t('Password')}
            name="password"
            type="password"
            ref={register}
            error={errors.password}
          />
        </Box>
        <Box marginTop="1em">
          <Input
            label={t('Confirm password')}
            name="confirm"
            type="password"
            ref={register}
            error={errors.confirm}
          />
        </Box>
        <Box marginTop="1.5em" alignSelf="center">
          <SubmitButton>{t('Next')}</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
}
