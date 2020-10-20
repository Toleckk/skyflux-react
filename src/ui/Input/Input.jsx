import React, {forwardRef, memo, useMemo, useState} from 'react'
import noop from 'noop6'
import {Flex} from 'reflexbox/styled-components'
import PropTypes from 'prop-types'
import {v4} from 'uuid'
import {useFormEnter} from 'utils'
import {Icon, Loader} from '..'
import {
  StyledAside,
  StyledError,
  StyledFieldset,
  StyledInput,
  StyledLegend,
} from './styles'

export const Input = memo(
  forwardRef(
    (
      {id, label, error, isLoading, type, multi, children, onKeyDown, ...props},
      ref,
    ) => {
      const realId = useMemo(() => id || v4(), [id])

      const [isEyeActive, setEyeActive] = useState(false)
      const onEyeClick = () => setEyeActive(isActive => !isActive)

      const handleEnter = useFormEnter({onKeyDown})

      return (
        <StyledFieldset error={!!error} hasLabel={!!label}>
          {!isLoading && error && <StyledError>{error}</StyledError>}
          {label && (
            <StyledLegend>
              <label htmlFor={realId}>{label}</label>
            </StyledLegend>
          )}
          <Flex>
            <StyledInput
              as={multi ? 'textarea' : 'input'}
              id={realId}
              ref={ref}
              hasPadding={isLoading || type === 'password'}
              type={type === 'password' && isEyeActive ? 'text' : type}
              onKeyDown={handleEnter}
              {...props}
            />
            <StyledAside>
              {isLoading ? (
                <Loader size="1.5rem" borderWidth="3px" hasShadow={false} />
              ) : type === 'password' ? (
                <Icon icon="eye" onClick={onEyeClick} />
              ) : (
                <></>
              )}
            </StyledAside>
            {children}
          </Flex>
        </StyledFieldset>
      )
    },
  ),
)

Input.displayName = 'Input'

Input.defaultProps = {
  error: null,
  isLoading: false,
  type: 'text',
  id: null,
  label: '',
  multi: false,
  onKeyDown: noop,
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  onKeyDown: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password']),
  multi: PropTypes.bool,
  children: PropTypes.node,
}
