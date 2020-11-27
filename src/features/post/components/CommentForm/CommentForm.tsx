import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {TEXT_MAX_LENGTH} from '@skyflux/react/validation'
import {Icon, Input} from '@skyflux/react/ui'
import {useCommentForm} from '../../hooks'

export type CommentFormProps = {
  postId: string
}

export const CommentForm: React.FC<CommentFormProps> = ({postId}) => {
  const {register, submit, submitting} = useCommentForm(postId)

  return (
    <form onSubmit={submit}>
      <Input
        multi
        rows={1}
        name="text"
        ref={register}
        maxLength={TEXT_MAX_LENGTH}
      >
        <Box
          width="2rem"
          height="2rem"
          as="button"
          {...{type: 'submit', disabled: submitting}}
        >
          <Icon icon="message" />
        </Box>
      </Input>
    </form>
  )
}
