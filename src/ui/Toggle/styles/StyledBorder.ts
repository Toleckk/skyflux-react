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

  border: 1px solid ${props => props.theme.text2};
  box-shadow: 0 0 0.5rem ${props => props.theme.text2};

  ${StyledCheckbox}:checked + & {
    border-color: ${props => props.theme.secondary};
    box-shadow: 0 0 0.5rem ${props => props.theme.secondary};
  }
`
