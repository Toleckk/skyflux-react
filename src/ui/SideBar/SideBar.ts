import React from 'react'
import styled, {css} from 'styled-components'

const border = css`
  border-color: rgb(${props => props.theme.primary});
  box-shadow: 0 0 10px rgb(${props => props.theme.primary});
`

const expandable = (minHeight: React.CSSProperties['maxHeight']) => css`
  max-height: ${minHeight};
  overflow-y: hidden;

  &:hover,
  &:focus-within {
    max-height: calc(98vh - 2px);
  }
`

export type SideBarProps = {
  minHeight?: React.CSSProperties['maxHeight'] | false
  border?: boolean | 'hover'
}

export const SideBar = styled.div<SideBarProps>`
  position: fixed;
  left: 2vw;
  top: 1vh;

  padding: 1rem 0;

  border-radius: 1rem;
  border: 1px solid transparent;

  background-color: rgb(${props => props.theme.primaryDark});

  ${props => props.minHeight && expandable(props.minHeight)}

  ${props => props.border === true && border}
  
  &:hover,
  &:focus-within {
    ${props => props.border === 'hover' && border}
  }
`
