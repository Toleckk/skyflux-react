import React, {useMemo} from 'react'
import {useLocation} from 'react-router'
import PropTypes from 'prop-types'
import {Icon} from '../../../../ui'
import {StyledIcon, StyledLink} from './styles'

export const NavigationButton = ({to, children, icon, ...props}) => {
  const {pathname} = useLocation()

  const linkProps = useMemo(() => ({...(to ? {to} : {as: 'button'})}), [to])

  return (
    <StyledLink isActive={pathname.startsWith(to)} {...linkProps} {...props}>
      {icon ? <StyledIcon icon={icon} /> : children}
    </StyledLink>
  )
}

NavigationButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  icon: Icon.propTypes.icon,
}
