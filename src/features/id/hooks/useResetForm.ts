import {useMemo} from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {useMutation} from '@apollo/client'
import {yupResolver} from '@hookform/resolvers/yup'
import {password} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {RESET_PASSWORD, ResetPasswordVariables} from '../graphql'

export type UseResetFormResult = CustomFormHookResult<
  ResetPasswordVariables & {confirm: string}
>

const schema = yup.object().shape({
  password: password.required(),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm is a required field'),
})

export const useResetForm = (): UseResetFormResult => {
  const [reset, {error, loading}] = useMutation(RESET_PASSWORD)

  const {handleSubmit, errors, ...rest} = useForm<
    ResetPasswordVariables & {confirm: string}
  >({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const submit = useMemo(() => handleSubmit(variables => reset({variables})), [
    handleSubmit,
    reset,
  ])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    ...rest,
  }
}
