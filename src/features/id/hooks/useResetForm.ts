import {useMemo} from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useAuth} from 'reactfire'
import {password} from '@skyflux/react/validation'
import {
  CustomFormHookResult,
  mergeErrors,
  useFirebaseMutation,
} from '@skyflux/react/utils'

export type ResetPasswordVariables = {
  token: string
  password: string
  confirm: string
}

export type UseResetFormResult = CustomFormHookResult<ResetPasswordVariables>

const schema = yup.object().shape({
  password: password.required(),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm is a required field'),
})

export const useResetForm = (): UseResetFormResult => {
  const auth = useAuth()

  const {loading, execute, firebaseError} = useFirebaseMutation(
    data => auth.confirmPasswordReset(data.token, data.password),
    {
      'auth/weak-password': 'password',
    },
  )

  const {handleSubmit, errors, ...rest} = useForm<ResetPasswordVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const submit = useMemo(() => handleSubmit(execute), [handleSubmit, execute])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(firebaseError, errors),
    ...rest,
  }
}
