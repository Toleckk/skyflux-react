import styled from 'styled-components'

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  height: 100%;
  width: 100%;

  & > li:first-child {
    margin-bottom: auto !important;
  }
`
