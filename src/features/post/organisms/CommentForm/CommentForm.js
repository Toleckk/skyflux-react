import React, {useCallback} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'
import {Icon, Input} from 'ui'
import {Post} from 'models/post'

const schema = yup.object().shape({
  text: yup.string().max(120).required(),
})

export const CommentForm = ({post}) => {
  const {register, handleSubmit} = useForm({resolver: yupResolver(schema)})

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

  return (
    <form onSubmit={onSubmit}>
      <input hidden readOnly value={post._id} name="postId" ref={register} />
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
