import React, {useCallback} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {useTranslation} from 'react-i18next'
import {password} from 'validation'
import {mergeErrors} from 'utils'
import {Button, Input} from 'ui'
import {useMyMutation} from 'features/shared/hooks'
import {updatePassword} from 'models/user'
import {ResponsibleForm} from '../../atoms'

const schema = yup.object().shape({
  oldPassword: password.required(),
  newPassword: password
    .notOneOf([yup.ref('old'), "Passwords can't be equal"])
    .required(),
})

export const ChangePasswordForm = () => {
  const [update, {error}] = useMyMutation(updatePassword())

  const {handleSubmit, register, errors: formErrors} = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const errors = mergeErrors(formErrors, error)

  const onSubmit = useCallback(handleSubmit(update), [update])

  const {t} = useTranslation('settings')

  return (
    <ResponsibleForm onSubmit={onSubmit}>
      <Input
        type="password"
        label={t('Old password')}
        ref={register}
        name="oldPassword"
        error={t(errors.oldPassword)}
      />
      <Box marginTop="1rem" width="100%">
        <Input
          type="password"
          label={t('New password')}
          ref={register}
          name="newPassword"
          error={t(errors.newPassword)}
        />
      </Box>
      <Box marginTop="1rem">
        <Button type="submit">{t('Change')}</Button>
      </Box>
    </ResponsibleForm>
  )
}
