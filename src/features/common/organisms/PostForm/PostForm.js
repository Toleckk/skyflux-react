import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Icon} from 'ui'
import {useBooleanState} from 'use-boolean-state'
import {useMyMutation} from 'features/common/hooks'
import {createPost} from 'models/post'
import {PostInput} from '../../molecules'
import {StyledButton, StyledContainer} from './styles'

const schema = yup.object().shape({
  text: yup.string().max(120).required(),
})

export const PostForm = ({placeholder}) => {
  const [create, {loading}] = useMyMutation(createPost())

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(create), [handleSubmit, create])

  const [isFocused, focus, blur] = useBooleanState(false)

  return (
    <StyledContainer as="form" onSubmit={onSubmit}>
      <PostInput
        name="text"
        onBlur={blur}
        onFocus={focus}
        placeholder={placeholder}
        ref={register}
      />
      {(isFocused || formState.isDirty) && (
        <StyledButton type="submit" disabled={loading}>
          <Icon icon="message" />
        </StyledButton>
      )}
    </StyledContainer>
  )
}

PostForm.propTypes = {
  placeholder: PropTypes.string,
}
