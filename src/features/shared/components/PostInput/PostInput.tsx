import React, {useCallback, useState} from 'react'
import {TextArea} from '@skyflux/react/ui'
import {useFormEnter} from '@skyflux/react/utils'

export type PostInputProps = React.PropsWithoutRef<
  JSX.IntrinsicElements['textarea']
> & {
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>
}

export const PostInput: React.FC<PostInputProps> = ({
  onFocus,
  onBlur,
  value,
  onKeyDown,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false)
  const onAreaFocus = useCallback(
    event => {
      setFocused(true)
      return onFocus?.(event)
    },
    [onFocus, setFocused],
  )

  const onAreaBlur = useCallback(
    event => {
      setFocused(false)
      return onBlur?.(event)
    },
    [onBlur, setFocused],
  )

  const handleEnter = useFormEnter({onKeyDown})

  return (
    <TextArea
      rows={isFocused || value ? 4 : 1}
      onFocus={onAreaFocus}
      onBlur={onAreaBlur}
      value={value}
      onKeyDown={handleEnter}
      {...props}
    />
  )
}
