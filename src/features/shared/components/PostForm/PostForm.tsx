import React from 'react'
import {Controller} from 'react-hook-form'
import {useBooleanState} from 'use-boolean-state'
import {TEXT_MAX_LENGTH} from '@skyflux/react/validation'
import {Icon} from '@skyflux/react/ui'
import {StyledButton, StyledContainer} from './styles'
import {PostInput} from '../index'
import {usePostForm} from '../../hooks'

export type PostFormProps = {
  placeholder: string
}

export const PostForm: React.FC<PostFormProps> = ({placeholder}) => {
  const {submitting, formState, control, submit} = usePostForm()

  const [isFocused, focus, blur] = useBooleanState(false)

  return (
    <StyledContainer as="form" onSubmit={submit}>
      <Controller
        name="text"
        control={control}
        render={({onBlur, ...props}) => (
          <PostInput
            placeholder={placeholder}
            onBlur={() => {
              blur()
              onBlur()
            }}
            onFocus={focus}
            maxLength={TEXT_MAX_LENGTH}
            {...props}
          />
        )}
      />
      {(isFocused || formState.isDirty) && (
        <StyledButton type="submit" disabled={submitting}>
          <Icon icon="message" />
        </StyledButton>
      )}
    </StyledContainer>
  )
}
