import React, {useCallback} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {useTranslation} from 'react-i18next'
import {Button, Input} from 'ui'

const schema = yup.object().shape({
  old: yup
    .string()
    .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'Invalid password')
    .required(),
  new: yup
    .string()
    .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'Invalid password')
    .notOneOf([yup.ref('old'), "Passwords can't be equal"])
    .required(),
})

export const ChangePasswordForm = () => {
  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

  const {t} = useTranslation('settings')

  return (
    <Box width="40%" as="form" onSubmit={onSubmit}>
      <Input
        type="password"
        label={t('Old password')}
        ref={register}
        name="old"
        error={errors.old?.message}
      />
      <Box marginTop="1rem">
        <Input
          type="password"
          label={t('New password')}
          ref={register}
          name="new"
          error={errors.new?.message}
        />
      </Box>
      <Box marginTop="1rem">
        <Button type="submit">{t('Change')}</Button>
      </Box>
    </Box>
  )
}
