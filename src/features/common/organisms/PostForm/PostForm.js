import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Icon} from 'ui'
import {PostInput} from '../../molecules'
import {StyledButton, StyledContainer} from './styles'

const schema = yup.object().shape({
  text: yup.string().max(120).required(),
})

export const PostForm = ({placeholder}) => {
  const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

  const [isFocused, setFocused] = useState(false)

  const onFocus = useCallback(() => setFocused(true), [setFocused])
  const onBlur = useCallback(() => setFocused(false), [setFocused])

  return (
    <form onSubmit={onSubmit}>
      <StyledContainer>
        <PostInput
          name="text"
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          ref={register}
        />
        {isFocused && (
          <StyledButton>
            <Icon icon="message" />
          </StyledButton>
        )}
      </StyledContainer>
    </form>
  )
}

PostForm.propTypes = {
  placeholder: PropTypes.string,
}
