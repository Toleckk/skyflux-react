import {useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useAuth} from 'reactfire'
import {useAsync} from '@react-hook/async'
import {FirebaseError} from 'firebase'
import {password} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'

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

  const [firebaseError, setFirebaseError] = useState<
    Partial<FirebaseError> | undefined
  >(undefined)

  const [{status}, reset] = useAsync(data =>
    auth
      .confirmPasswordReset(data.token, data.password)
      .catch(({code, message}) => {
        const field = errorsKeys[code]
        if (field) setFirebaseError({[field]: message})
      }),
  )

  const {handleSubmit, errors, ...rest} = useForm<ResetPasswordVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const submit = useMemo(() => handleSubmit(reset), [handleSubmit, reset])

  return {
    submit,
    submitting: status === 'loading',
    errors: mergeErrors(firebaseError, errors),
    ...rest,
  }
}

const errorsKeys: Record<string, keyof ResetPasswordVariables> = {
  'auth/weak-password': 'password',
}
