import React from 'react'
import PropTypes from 'prop-types'
import {keyframes} from 'styled-components'
import {Flex} from 'reflexbox/styled-components'
import {StyledContainer, StyledRing} from './styles'

const first = keyframes`
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    }
`

const second = keyframes`
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    }
`

export const Loader = ({size, borderWidth, hasShadow, hasBackground}) => (
  <Flex
    width="100%"
    height="100%"
    alignItems="center"
    justifyContent="center"
    flex={1}
  >
    <StyledContainer size={size} hasBackground={hasBackground}>
      <StyledRing
        animation={first}
        size={size}
        borderWidth={borderWidth}
        hasShadow={hasShadow}
      />
      <StyledRing
        animation={second}
        size={size}
        borderWidth={borderWidth}
        hasShadow={hasShadow}
      />
    </StyledContainer>
  </Flex>
)

Loader.defaultProps = {
  size: '30vh',
  borderWidth: '15px',
  hasShadow: true,
  hasBackground: false,
}

Loader.propTypes = {
  size: PropTypes.string,
  borderWidth: PropTypes.string,
  hasShadow: PropTypes.bool,
  hasBackground: PropTypes.bool,
}
