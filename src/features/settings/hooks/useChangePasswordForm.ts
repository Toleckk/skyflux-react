import {useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Firebase from 'firebase'
import {useAuth} from 'reactfire'
import {
  CustomFormHookResult,
  mergeErrors,
  useFirebaseMutation,
} from '@skyflux/react/utils'
import {password} from '@skyflux/react/validation'

export type ChangePasswordVariables = {
  oldPassword: string
  newPassword: string
}

export type UseChangePasswordFormResult = CustomFormHookResult<ChangePasswordVariables>

const schema = yup.object().shape({
  oldPassword: password.required(),
  newPassword: password
    .notOneOf([yup.ref('oldPassword'), "Passwords can't be equal"])
    .required(),
})

export const useChangePasswordForm = (): UseChangePasswordFormResult => {
  const auth = useAuth()

  const {
    handleSubmit,
    errors,
    reset,
    ...rest
  } = useForm<ChangePasswordVariables>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const {loading, execute, firebaseError} = useFirebaseMutation(
    async (data: ChangePasswordVariables) => {
      if (!auth.currentUser) return

      await auth.currentUser.reauthenticateWithCredential(
        Firebase.auth.EmailAuthProvider.credential(
          auth.currentUser.email as string,
          data.oldPassword,
        ),
      )
      await auth.currentUser.updatePassword(data.newPassword)
      reset()
    },
    {
      'auth/wrong-password': 'oldPassword',
      'auth/weak-password': 'newPassword',
    },
  )

  const submit = useMemo(() => handleSubmit(execute), [handleSubmit, execute])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(firebaseError, errors),
    reset,
    ...rest,
  }
}
