import {useMemo} from 'react'
import {useMutation} from '@apollo/client'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useHistory} from 'react-router'
import {email, password} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {CREATE_USER, CreateUserVariables} from '../graphql'

export type UseRegisterFormResult = CustomFormHookResult<CreateUserVariables>

const schema = yup.object().shape({
  email: email.required(),
  password: password.required(),
})

export const useRegisterForm = (): UseRegisterFormResult => {
  const history = useHistory()
  const [signUp, {error, loading}] = useMutation(CREATE_USER, {
    onCompleted: data => data?.createUser?._id && history.push('/id/auth'),
  })

  const {handleSubmit, errors, ...rest} = useForm<CreateUserVariables>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const submit = useMemo(() => handleSubmit(variables => signUp({variables})), [
    handleSubmit,
    signUp,
  ])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    ...rest,
  }
}
