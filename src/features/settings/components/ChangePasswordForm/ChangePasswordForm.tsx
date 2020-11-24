import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Button, Input} from 'ui'
import {ResponsibleForm} from '../../components'
import {useChangePasswordForm} from '../../hooks'

export const ChangePasswordForm: React.FC = () => {
  const {t} = useTranslation('settings')

  const {submit, errors, register} = useChangePasswordForm()

  return (
    <ResponsibleForm onSubmit={submit}>
      <Input
        type="password"
        label={t('Old password')}
        ref={register}
        name="oldPassword"
        error={t(errors.oldPassword as string)}
      />
      <Box marginTop="1rem" width="100%">
        <Input
          type="password"
          label={t('New password')}
          ref={register}
          name="newPassword"
          error={t(errors.newPassword as string)}
        />
      </Box>
      <Box marginTop="1rem">
        <Button type="submit">{t('Change')}</Button>
      </Box>
    </ResponsibleForm>
  )
}
