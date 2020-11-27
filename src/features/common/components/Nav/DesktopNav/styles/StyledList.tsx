import React from 'react'
import {StyledItem} from './StyledItem'

export const StyledList: React.FC = ({children}) => (
  <ul>
    {React.Children.map(children, (child, i) => (
      <StyledItem key={i}>{child}</StyledItem>
    ))}
  </ul>
)
