import React, {forwardRef, useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {TextArea} from 'ui'

export const PostInput = forwardRef(
  ({onFocus, onBlur, onChange, value, defaultValue, ...props}, ref) => {
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

    const onAreaChange = useCallback(
      event => {
        event.persist()
        setText(event.target.value)
        return onChange?.(event)
      },
      [onChange, setText],
    )

    return (
      <TextArea
        rows={isFocused || value || text ? 4 : 1}
        defaultValue={defaultValue}
        onFocus={onAreaFocus}
        onBlur={onAreaBlur}
        onChange={onAreaChange}
        ref={ref}
        {...props}
      />
    )
  },
)

PostInput.displayName = 'PostInput'

PostInput.defaultProps = {
  value: '',
  defaultValue: '',
}

PostInput.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
}
