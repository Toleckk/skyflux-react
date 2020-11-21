import React, {useMemo} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMutation} from '@apollo/client'
import * as yup from 'yup'
import {useTranslation} from 'react-i18next'
import {password} from 'validation'
import {mergeErrors} from 'utils'
import {Button, Input} from 'ui'
import {UPDATE_PASSWORD} from '../../graphql'
import {ResponsibleForm} from '../../atoms'
import {UpdatePasswordVariables} from '../../graphql/types/UpdatePassword'

const schema = yup.object().shape({
  oldPassword: password.required(),
  newPassword: password
    .notOneOf([yup.ref('oldPassword'), "Passwords can't be equal"])
    .required(),
})

export const ChangePasswordForm: React.FC = () => {
  const [update, {error}] = useMutation(UPDATE_PASSWORD)

  const {
    handleSubmit,
    register,
    errors: formErrors,
  } = useForm<UpdatePasswordVariables>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const errors = mergeErrors(formErrors, error)

  const onSubmit = useMemo(
    () => handleSubmit(variables => update({variables})),
    [handleSubmit, update],
  )

  const {t} = useTranslation('settings')

  return (
    <ResponsibleForm onSubmit={onSubmit}>
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
