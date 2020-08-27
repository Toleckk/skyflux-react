import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {TextArea} from '../../../../ui'

export const PostInput = ({onFocus, onBlur, value, ...props}) => {
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

  return (
    <TextArea
      rows={isFocused || value ? 4 : 1}
      onFocus={onAreaFocus}
      onBlur={onAreaBlur}
      {...props}
    />
  )
}

PostInput.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
}
