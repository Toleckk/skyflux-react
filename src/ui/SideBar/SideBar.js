import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const border = css`
  border-color: rgb(${props => props.theme.primary});
  box-shadow: 0 0 10px rgb(${props => props.theme.primary});
`

const expandable = minHeight => css`
  max-height: ${minHeight};
  overflow-y: hidden;

  &:hover {
    max-height: calc(98vh - 2px);
  }
`

export const SideBar = styled.div`
  position: fixed;
  left: 2vw;
  top: 1vh;

  padding: 1rem 0;

  border-radius: 1rem;
  border: 1px solid transparent;

  ${props => props.minHeight && expandable(props.minHeight)}

  ${props => props.border === true && border}
  
  &:hover {
    ${props => props.border === 'hover' && border}
  }
`

SideBar.defaultProps = {
  minHeight: null,
  border: 'hover',
}

SideBar.propTypes = {
  minHeight: PropTypes.string,
  border: PropTypes.oneOf([true, false, 'hover']),
}
