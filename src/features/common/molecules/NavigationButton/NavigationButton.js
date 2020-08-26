import React, {useMemo} from 'react'
import {useLocation} from 'react-router'
import PropTypes from 'prop-types'
import {Icon} from '../../../../ui'
import {StyledIcon, StyledLink} from './styles'

export const NavigationButton = ({to, children, icon}) => {
  const {pathname} = useLocation()

  const props = useMemo(() => ({...(to ? {to} : {as: 'button'})}), [to])

  return (
    <StyledLink {...props} isActive={pathname.startsWith(to)}>
      {icon ? <StyledIcon icon={icon} /> : children}
    </StyledLink>
  )
}

NavigationButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  icon: Icon.propTypes.icon,
}
