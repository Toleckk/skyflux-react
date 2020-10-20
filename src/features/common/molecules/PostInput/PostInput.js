import React, {forwardRef, useCallback, useState} from 'react'
import noop from 'noop6'
import PropTypes from 'prop-types'
import {TextArea} from 'ui'
import {useFormEnter} from 'utils'

export const PostInput = forwardRef(
  (
    {onFocus, onBlur, onChange, value, defaultValue, onKeyDown, ...props},
    ref,
  ) => {
    const [isFocused, setFocused] = useState(false)
    const [text, setText] = useState(value || defaultValue)

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
        rows={isFocused || value || text ? 4 : 1}
        defaultValue={defaultValue}
        onFocus={onAreaFocus}
        onBlur={onAreaBlur}
        onChange={onAreaChange}
        onKeyDown={handleEnter}
        ref={ref}
        {...props}
      />
    )
  },
)

PostInput.displayName = 'PostInput'

PostInput.defaultProps = {
  value: '',
  onKeyDown: noop,
}

PostInput.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
}
