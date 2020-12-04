import {useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useAuth} from 'reactfire'
import {email, password} from '@skyflux/react/validation'
import {
  CustomFormHookResult,
  mergeErrors,
  useFirebaseMutation,
} from '@skyflux/react/utils'
import {useMe} from '@skyflux/react/features/shared/hooks'

export type CreateUserVariables = {
  email: string
  password: string
}

export type UseRegisterFormResult = CustomFormHookResult<CreateUserVariables>

const schema = yup.object().shape({
  email: email.required(),
  password: password.required(),
})

export const useRegisterForm = (): UseRegisterFormResult => {
  const auth = useAuth()
  const {refetch, loading} = useMe()

  const {handleSubmit, errors, ...rest} = useForm<CreateUserVariables>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const {
    execute: signUp,
    loading: submitting,
    firebaseError,
  } = useFirebaseMutation(
    ({email, password}: CreateUserVariables) =>
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(data => data.user && refetch()),
    {
      'auth/email-already-in-use': 'email',
      'auth/invalid-email': 'email',
      'auth/weak-password': 'password',
    },
  )

  const submit = useMemo(() => handleSubmit(signUp), [handleSubmit, signUp])

  return {
    submit,
    submitting: submitting || loading,
    errors: mergeErrors(firebaseError, errors),
    ...rest,
  }
}
