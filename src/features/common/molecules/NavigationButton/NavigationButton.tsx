import React from 'react'
import {useLocation} from 'react-router'
import {IconProps} from 'ui'
import {StyledIcon, StyledLink} from './styles'

export type NavigationButtonProps = React.PropsWithoutRef<
  {
    to?: string
    isActive?: boolean
    icon?: IconProps['icon']
    type?: 'reset' | 'button' | 'submit'
  } & JSX.IntrinsicElements['a'] &
    JSX.IntrinsicElements['button']
>

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  to,
  children,
  isActive,
  icon,
  ...props
}) => {
  const {pathname} = useLocation()

  return (
    <StyledLink
      {...(to ? {to} : {as: 'button'})}
      $isActive={isActive || (!!to && !!pathname.match(to))}
      {...props}
    >
      {icon ? <StyledIcon icon={icon} /> : children}
    </StyledLink>
  )
}
