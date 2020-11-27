import React, {forwardRef, memo, useMemo, useState} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {v4} from 'uuid'
import {useFormEnter} from '@skyflux/react/utils'
import {
  StyledAside,
  StyledError,
  StyledFieldset,
  StyledInput,
  StyledLegend,
} from './styles'
import {Icon, Loader} from '..'

export type InputProps = (JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['textarea']) & {
  id?: string
  label?: string
  error?: string
  isLoading?: boolean
  onKeyDown?: React.KeyboardEventHandler
  type?: 'text' | 'password'
  multi?: boolean
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        id,
        label,
        error,
        onKeyDown,
        isLoading = false,
        type = 'text',
        multi = false,
        children,
        ...props
      },
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
              ref={ref as any}
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
