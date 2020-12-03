import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMemo, useState} from 'react'
import * as yup from 'yup'
import {useAuth} from 'reactfire'
import {useAsync} from '@react-hook/async'
import {useHistory} from 'react-router'
import {login} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'

export type CreateResetRequestVariables = {
  login: string
}

export type UseRestoreFormResult = CustomFormHookResult<CreateResetRequestVariables>

const schema = yup.object().shape({login: login.required()})

export const useRestoreForm = (): UseRestoreFormResult => {
  const history = useHistory()
  const auth = useAuth()

  const [firebaseError, setFirebaseError] = useState<
    Partial<CreateResetRequestVariables> | undefined
  >(undefined)

  const [{status}, createRequest] = useAsync(data =>
    auth
      .sendPasswordResetEmail(data.login)
      .then(() => history.push('/id/message'))
      .catch(e => {
        const field = errorsKeys[e.code]
        if (field) setFirebaseError({[field]: e.message})
      }),
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
    submitting: status === 'loading',
    errors: mergeErrors(firebaseError, errors),
    ...rest,
  }
}

const errorsKeys: Record<string, keyof CreateResetRequestVariables> = {
  'auth/user-not-found': 'login',
}
