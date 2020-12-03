import {useMemo, useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useAuth} from 'reactfire'
import {useAsync} from '@react-hook/async'
import {email, password} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
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

  const [firebaseError, setFirebaseError] = useState<
    Partial<CreateUserVariables> | undefined
  >(undefined)

  const [{status}, signUp] = useAsync(data =>
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(data => data.user && refetch())
      .catch(error => {
        const field = errorsKeys[error.code]
        if (field) setFirebaseError({[field]: error.message})
      }),
  )

  const submit = useMemo(() => handleSubmit(signUp), [handleSubmit, signUp])

  return {
    submit,
    submitting: status === 'loading' || loading,
    errors: mergeErrors(firebaseError, errors),
    ...rest,
  }
}

const errorsKeys: Record<string, keyof CreateUserVariables> = {
  'auth/email-already-in-use': 'email',
  'auth/invalid-email': 'email',
  'auth/weak-password': 'password',
}
