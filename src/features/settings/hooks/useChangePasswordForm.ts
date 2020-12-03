import {useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useAuth} from 'reactfire'
import {useAsync} from '@react-hook/async'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {password} from '@skyflux/react/validation'

export type UpdatePasswordVariables = {
  newPassword: string
}

export type UseChangePasswordFormResult = CustomFormHookResult<UpdatePasswordVariables>

const schema = yup.object().shape({newPassword: password.required()})

export const useChangePasswordForm = (): UseChangePasswordFormResult => {
  const auth = useAuth()

  const {
    handleSubmit,
    errors,
    reset,
    ...rest
  } = useForm<UpdatePasswordVariables>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const [{status}, update] = useAsync(async (data: UpdatePasswordVariables) =>
    auth.currentUser
      ?.updatePassword(data.newPassword)
      .then(() => reset())
      .catch(console.error),
  )

  const submit = useMemo(() => handleSubmit(update), [handleSubmit, update])

  return {
    submit,
    submitting: status === 'loading',
    errors: mergeErrors(errors),
    reset,
    ...rest,
  }
}
