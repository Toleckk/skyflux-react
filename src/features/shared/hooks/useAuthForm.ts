import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMemo} from 'react'
import * as yup from 'yup'
import {login, password} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {useLogin} from './useLogin'
import {CreateSessionVariables} from '../graphql'

export type UseAuthFormResult = CustomFormHookResult<CreateSessionVariables>

const schema = yup
  .object()
  .shape({login: login.required(), password: password.required()})

export const useAuthForm = (): UseAuthFormResult => {
  const {login, error, loading} = useLogin()

  const {handleSubmit, errors, ...rest} = useForm<CreateSessionVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const submit = useMemo(() => handleSubmit(variables => login({variables})), [
    handleSubmit,
    login,
  ])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    ...rest,
  }
}
