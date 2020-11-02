import styled from 'styled-components'

export const StyledSubEventContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  font-size: ${props => (props.mini ? '0.825em' : '1em')};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
