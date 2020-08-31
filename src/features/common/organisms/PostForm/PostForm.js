import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../../../../ui'
import {PostInput} from '../../molecules'
import {StyledButton, StyledContainer} from './styles'

export const PostForm = ({placeholder}) => {
  const [isFocused, setFocused] = useState(false)

  const onFocus = useCallback(() => setFocused(true), [setFocused])
  const onBlur = useCallback(() => setFocused(false), [setFocused])

  return (
    <div>
      <StyledContainer>
        <PostInput
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
        {isFocused && (
          <StyledButton>
            <Icon icon="message" />
          </StyledButton>
        )}
      </StyledContainer>
    </div>
  )
}

PostForm.propTypes = {
  placeholder: PropTypes.string,
}
