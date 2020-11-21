import styled from 'styled-components'

export const StyledFilter = styled.div`
  &:hover {
    filter: drop-shadow(rgb(${props => props.theme.primary}) 0 0 4px);
  }
`
