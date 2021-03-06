import styled from 'styled-components'

export type H1Props = {
  center?: boolean
}

export const H1 = styled.h1<H1Props>`
  color: ${props => props.theme.text2};

  font-size: 1.5rem;
  font-weight: normal;

  text-align: ${props => (props.center ? 'center' : 'initial')};
`
