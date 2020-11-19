import React, {useCallback, useState} from 'react'
import noop from 'noop6'
import PropTypes from 'prop-types'
import {TextArea} from 'ui'
import {useFormEnter} from 'utils'

export const PostInput = ({onFocus, onBlur, value, onKeyDown, ...props}) => {
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

PostInput.defaultProps = {
  value: '',
  onKeyDown: noop,
}

PostInput.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
}
