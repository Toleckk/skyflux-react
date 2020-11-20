import React, {useMemo} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {useMutation} from '@apollo/client'
import * as yup from 'yup'
import {text, TEXT_MAX_LENGTH} from 'validation'
import {Icon, Input} from 'ui'
import {Post} from 'models/post'
import {CREATE_COMMENT} from '../../graphql'

const schema = yup.object().shape({text: text.required()})

export const CommentForm = ({post}) => {
  const {register, handleSubmit, reset} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const [create] = useMutation(CREATE_COMMENT)

  const onSubmit = useMemo(
    () =>
      handleSubmit(data => {
        create({
          variables: {
            ...data,
            postId: post._id,
          },
        })
        reset()
      }),
    [handleSubmit, create, reset, post._id],
  )

  return (
    <form onSubmit={onSubmit}>
      <Input
        multi
        rows="1"
        name="text"
        ref={register}
        maxLength={TEXT_MAX_LENGTH}
      >
        <Box width="2rem" height="2rem" as="button" type="submit">
          <Icon icon="message" />
        </Box>
      </Input>
    </form>
  )
}

CommentForm.propTypes = {
  post: Post.isRequired,
}
