import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMemo} from 'react'
import * as yup from 'yup'
import {useAuth} from 'reactfire'
import {useHistory} from 'react-router'
import {login} from '@skyflux/react/validation'
import {
  CustomFormHookResult,
  mergeErrors,
  useFirebaseMutation,
} from '@skyflux/react/utils'

export type CreateResetRequestVariables = {
  login: string
}

export type UseRestoreFormResult = CustomFormHookResult<CreateResetRequestVariables>

const schema = yup.object().shape({login: login.required()})

export const useRestoreForm = (): UseRestoreFormResult => {
  const history = useHistory()
  const auth = useAuth()

  const {
    execute: createRequest,
    firebaseError,
    loading,
  } = useFirebaseMutation(
    data =>
      auth
        .sendPasswordResetEmail(data.login)
        .then(() => history.push('/id/message')),
    {'auth/user-not-found': 'login'},
  )

  const {handleSubmit, errors, ...rest} = useForm<CreateResetRequestVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const submit = useMemo(() => handleSubmit(createRequest), [
    handleSubmit,
    createRequest,
  ])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(firebaseError, errors),
    ...rest,
  }
}
