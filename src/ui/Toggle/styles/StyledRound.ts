import React from 'react'
import styled from 'styled-components'
import {StyledCheckbox} from './StyledCheckbox'
import {StyledBorder} from './StyledBorder'

export type StyledRoundProps = {
  width: React.CSSProperties['width']
  height: React.CSSProperties['height']
}

export const StyledRound = styled.div<StyledRoundProps>`
  height: calc(${props => props.height || '3rem'} * 0.8);
  width: calc(${props => props.height || '3rem'} * 0.8);

  background-color: rgb(${props => props.theme.primaryText});

  border-radius: 50%;

  transform: translateX(10%);

  transition-property: transform, background-color;

  ${StyledCheckbox}:checked + ${StyledBorder} > & {
    transform: translateX(calc(${props => props.width} - 110%));
    background: rgb(${props => props.theme.secondary});
  }
`
