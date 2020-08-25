import React, {forwardRef, memo, useState} from 'react'
import {Flex} from 'reflexbox/styled-components'
import PropTypes from 'prop-types'
import {
  StyledAside,
  StyledError,
  StyledFieldset,
  StyledInput,
  StyledLegend,
} from './styles'
import {Icon} from '../Icon'
import {Loader} from '../Loader/Loader'

export const Input = memo(
  forwardRef(({id, label, error, isLoading, type, ...props}, ref) => {
    const [isEyeActive, setEyeActive] = useState(false)

    const onEyeClick = () => setEyeActive(isActive => !isActive)

    return (
      <StyledFieldset error={!!error}>
        {error && <StyledError>{error}</StyledError>}
        <StyledLegend>
          <label htmlFor={id}>{label}</label>
        </StyledLegend>
        <Flex>
          <StyledInput
            id={id}
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
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
}
