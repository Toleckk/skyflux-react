import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {useBooleanState} from 'use-boolean-state'
import {text, TEXT_MAX_LENGTH} from 'validation'
import {Icon} from 'ui'
import {useMyMutation} from 'features/common/hooks'
import {createPost} from 'models/post'
import {PostInput} from '../../molecules'
import {StyledButton, StyledContainer} from './styles'

const schema = yup.object().shape({text: text.required()})

export const PostForm = ({placeholder}) => {
  const [create, {loading}] = useMyMutation(createPost())

  const {handleSubmit, formState, reset, control} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const onSubmit = useMemo(
    () =>
      handleSubmit(data => {
        create(data)
        reset()
      }),
    [handleSubmit, create, reset],
  )

  const [isFocused, focus, blur] = useBooleanState(false)

  return (
    <StyledContainer as="form" onSubmit={onSubmit}>
      <Controller
        name="text"
        control={control}
        render={({onBlur, ...props}) => (
          <PostInput
            placeholder={placeholder}
            onBlur={e => {
              blur()
              onBlur(e)
            }}
            onFocus={focus}
            maxLength={TEXT_MAX_LENGTH}
            {...props}
          />
        )}
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
