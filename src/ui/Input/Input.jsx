import React, {forwardRef, memo, useMemo, useState} from 'react'
import {Flex} from 'reflexbox/styled-components'
import PropTypes from 'prop-types'
import {v4} from 'uuid'
import {Icon, Loader} from '..'
import {
  StyledAside,
  StyledError,
  StyledFieldset,
  StyledInput,
  StyledLegend,
} from './styles'

export const Input = memo(
  forwardRef(({id, label, error, isLoading, type, ...props}, ref) => {
    const realId = useMemo(() => id || v4(), [id])

    const [isEyeActive, setEyeActive] = useState(false)

    const onEyeClick = () => setEyeActive(isActive => !isActive)

    return (
      <StyledFieldset error={!!error}>
        {error && <StyledError>{error}</StyledError>}
        <StyledLegend>
          <label htmlFor={realId}>{label}</label>
        </StyledLegend>
        <Flex>
          <StyledInput
            id={realId}
            ref={ref}
            hasPadding={isLoading && type === 'password'}
            type={type === 'password' && isEyeActive ? 'text' : type}
            {...props}
          />
          <StyledAside>
            {isLoading ? (
              <Loader />
            ) : type === 'password' ? (
              <Icon icon="eye" onClick={onEyeClick} />
            ) : (
              <></>
            )}
          </StyledAside>
        </Flex>
      </StyledFieldset>
    )
  }),
)

Input.displayName = 'Input'

Input.defaultProps = {
  error: null,
  isLoading: false,
  type: 'text',
  id: null,
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
}
