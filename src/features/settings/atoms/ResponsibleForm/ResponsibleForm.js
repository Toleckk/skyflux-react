import styled from 'styled-components'

export const ResponsibleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
    align-items: initial;
  }
`
