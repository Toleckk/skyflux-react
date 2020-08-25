import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox'

export const StyledContainer = styled(Flex)`
  position: relative;

  align-items: center;
  justify-content: center;

  height: ${props => props.size};
  width: ${props => props.size};

  ${props => props.hasBackground && 'background: rgba(0, 0, 0, 0.7);'};
`

StyledContainer.defaultProps = {
  hasBackground: false,
}

StyledContainer.propTypes = {
  hasBackground: PropTypes.bool,
  size: PropTypes.string.isRequired,
}
