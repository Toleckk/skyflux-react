import React, {useMemo} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMutation} from '@apollo/client'
import * as yup from 'yup'
import {text, TEXT_MAX_LENGTH} from 'validation'
import {Icon, Input} from 'ui'
import {CREATE_COMMENT, CreateCommentVariables} from '../../graphql'

const schema = yup.object().shape({text: text.required()})

export type CommentFormProps = {
  postId: string
}

export const CommentForm: React.FC<CommentFormProps> = ({postId}) => {
  const [create] = useMutation(CREATE_COMMENT)

  const {register, handleSubmit, reset} = useForm<CreateCommentVariables>({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const onSubmit = useMemo(
    () =>
      handleSubmit(data => {
        create({variables: {...data, postId}})
        reset()
      }),
    [handleSubmit, create, reset, postId],
  )

  return (
    <form onSubmit={onSubmit}>
      <Input
        multi
        rows={1}
        name="text"
        ref={register}
        maxLength={TEXT_MAX_LENGTH}
      >
        <Box width="2rem" height="2rem" as="button" {...{type: 'submit'}}>
          <Icon icon="message" />
        </Box>
      </Input>
    </form>
  )
}
