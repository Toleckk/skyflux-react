import {useMemo} from 'react'
import {useMutation} from '@apollo/client'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {text} from 'validation'
import {CREATE_POST, CreatePostVariables} from '../graphql'
import {CustomFormHookResult, mergeErrors} from '../../../utils'

const schema = yup.object().shape({text: text.required()})

export type UsePostFormResult = CustomFormHookResult<CreatePostVariables>

export const usePostForm = (): UsePostFormResult => {
  const [create, {loading, error}] = useMutation(CREATE_POST)

  const {handleSubmit, reset, errors, ...rest} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const submit = useMemo(
    () =>
      handleSubmit(variables => {
        reset()
        return create({variables})
      }),
    [handleSubmit, create, reset],
  )

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    reset,
    ...rest,
  }
}
