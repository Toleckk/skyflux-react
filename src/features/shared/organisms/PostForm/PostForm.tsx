import React, {useMemo} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMutation} from '@apollo/client'
import {useBooleanState} from 'use-boolean-state'
import * as yup from 'yup'
import {text, TEXT_MAX_LENGTH} from 'validation'
import {Icon} from 'ui'
import {CREATE_POST} from '../../graphql'
import {PostInput} from '../../molecules'
import {StyledButton, StyledContainer} from './styles'

const schema = yup.object().shape({text: text.required()})

export type PostFormProps = {
  placeholder: string
}

export const PostForm: React.FC<PostFormProps> = ({placeholder}) => {
  const [create, {loading}] = useMutation(CREATE_POST)

  const {handleSubmit, formState, reset, control} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {text: ''},
  })

  const onSubmit = useMemo(
    () =>
      handleSubmit(variables => {
        create({variables})
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
        <StyledButton type="submit" disabled={loading}>
          <Icon icon="message" />
        </StyledButton>
      )}
    </StyledContainer>
  )
}
