import {useMutation} from '@apollo/client'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMemo} from 'react'
import * as yup from 'yup'
import {login} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {CREATE_RESET_REQUEST, CreateResetRequestVariables} from '../graphql'

export type UseRestoreFormResult = CustomFormHookResult<CreateResetRequestVariables>

const schema = yup.object().shape({login: login.required()})

export const useRestoreForm = (): UseRestoreFormResult => {
  const [createRequest, {error, loading}] = useMutation(CREATE_RESET_REQUEST)

  const {handleSubmit, errors, ...rest} = useForm<CreateResetRequestVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const submit = useMemo(
    () => handleSubmit(variables => createRequest({variables})),
    [handleSubmit, createRequest],
  )

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    ...rest,
  }
}
