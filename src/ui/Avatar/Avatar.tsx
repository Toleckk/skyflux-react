import React from 'react'
import {StyledContainer} from './styles'
import {Icon} from '../Icon'

export type AvatarProps = {
  src?: string | null
}

export const Avatar: React.FC<AvatarProps> = ({src, children, ...props}) => (
  <StyledContainer {...props}>
    {src ? (
      <img src={src} alt="avatar" width="100%" height="100%" />
    ) : (
      <Icon icon="avatar" size="80%" />
    )}
    {children}
  </StyledContainer>
)
