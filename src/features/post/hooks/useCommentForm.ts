import {useMemo} from 'react'
import {useMutation} from '@apollo/client'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {text} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {CREATE_COMMENT, CreateCommentVariables} from '../graphql'

const schema = yup.object().shape({text: text.required()})

export type UseCommentFormResult = CustomFormHookResult<CreateCommentVariables>

export const useCommentForm = (postId: string): UseCommentFormResult => {
  const [create, {loading, error}] = useMutation(CREATE_COMMENT)

  const {
    handleSubmit,
    reset,
    errors,
    ...rest
  } = useForm<CreateCommentVariables>({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const submit = useMemo(
    () =>
      handleSubmit(data => {
        reset()
        return create({variables: {...data, postId}})
      }),
    [handleSubmit, create, reset, postId],
  )

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    reset,
    ...rest,
  }
}
