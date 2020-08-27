import React, {useCallback, useState} from 'react'
import {Icon} from '../../../../ui'
import {PostInput} from '../../molecules'
import {StyledButton, StyledContainer} from './styles'

export const PostForm = () => {
  const [isFocused, setFocused] = useState(false)

  const onFocus = useCallback(() => setFocused(true), [setFocused])
  const onBlur = useCallback(() => setFocused(false), [setFocused])

  return (
    <div>
      <StyledContainer>
        <PostInput
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder="Напишите текст..."
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
