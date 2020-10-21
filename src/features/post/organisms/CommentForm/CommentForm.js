import React, {useMemo} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'
import {Icon, Input} from 'ui'
import {useMyMutation} from 'features/common/hooks'
import {Post} from 'models/post'
import {createComment} from 'models/comment'

const schema = yup.object().shape({
  text: yup.string().max(120).required(),
})

export const CommentForm = ({post}) => {
  const {register, handleSubmit, reset} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const [create] = useMyMutation(createComment({postId: post._id}))

  const onSubmit = useMemo(
    () =>
      handleSubmit(data => {
        create(data)
        reset()
      }),
    [handleSubmit, create, reset],
  )

  return (
    <form onSubmit={onSubmit}>
      <Input multi rows="1" name="text" ref={register}>
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
