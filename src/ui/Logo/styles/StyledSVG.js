import styled from 'styled-components'

export const StyledSVG = styled.svg`
  transform: rotate(100deg);
  filter: blur(2px) contrast(130%)
    drop-shadow(0 0 1rem rgb(${props => props.theme.primary}));
  width: 100%;
  height: 100%;
  margin-left: -8%;
  margin-top: -8%;
`
