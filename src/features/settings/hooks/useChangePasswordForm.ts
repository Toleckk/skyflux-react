import {useMemo} from 'react'
import {useMutation} from '@apollo/client'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {CustomFormHookResult, mergeErrors} from 'utils'
import * as yup from 'yup'
import {password} from 'validation'
import {UPDATE_PASSWORD, UpdatePasswordVariables} from '../graphql'

export type UseChangePasswordFormResult = CustomFormHookResult<UpdatePasswordVariables>

const schema = yup.object().shape({
  oldPassword: password.required(),
  newPassword: password
    .notOneOf([yup.ref('oldPassword'), "Passwords can't be equal"])
    .required(),
})

export const useChangePasswordForm = (): UseChangePasswordFormResult => {
  const [update, {error, loading}] = useMutation(UPDATE_PASSWORD)

  const {handleSubmit, errors, ...rest} = useForm<UpdatePasswordVariables>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const submit = useMemo(() => handleSubmit(variables => update({variables})), [
    handleSubmit,
    update,
  ])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    ...rest,
  }
}
