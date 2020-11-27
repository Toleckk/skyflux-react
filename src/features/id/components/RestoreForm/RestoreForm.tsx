import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Input} from '@skyflux/react/ui'
import {FieldDescription, SubmitButton} from '..'
import {useRestoreForm} from '../../hooks'

export const RestoreForm: React.FC = () => {
  const {t} = useTranslation('id')

  const {submit, register, errors} = useRestoreForm()

  return (
    <Flex flexDirection="column" alignItems="center">
      <FieldDescription>{t('Enter nickname or email')}</FieldDescription>
      <Box marginTop="1em">
        <form onSubmit={submit}>
          <Input
            label={t('Login')}
            name="login"
            ref={register}
            error={t(errors.login as string)}
          />
          <Flex marginTop="1.5em" justifyContent="center">
            <SubmitButton>{t('Next')}</SubmitButton>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}
