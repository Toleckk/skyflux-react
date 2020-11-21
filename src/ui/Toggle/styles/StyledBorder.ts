import React from 'react'
import styled from 'styled-components'
import {StyledCheckbox} from './StyledCheckbox'

export type StyledBorderProps = {
  width: React.CSSProperties['width']
  height: React.CSSProperties['height']
}

export const StyledBorder = styled.div<StyledBorderProps>`
  display: flex;
  align-items: center;

  transition-property: background-color;

  width: ${props => props.width || '6rem'};
  height: ${props => props.height || '3rem'};

  border-radius: calc(${props => props.height || '3rem'} * 0.5);

  border: 1px solid rgb(${props => props.theme.primaryText});
  box-shadow: 0 0 0.5rem rgb(${props => props.theme.primaryText});

  ${StyledCheckbox}:checked + & {
    border-color: rgb(${props => props.theme.secondary});
    box-shadow: 0 0 0.5rem rgb(${props => props.theme.secondary});
  }
`
