import styled from 'styled-components'

export const StyledContainer = styled.div`
  & > .react-datepicker-wrapper {
    display: block;
  }

  & .react-datepicker__close-icon {
    padding-top: 0.5rem;
  }

  & .react-datepicker__close-icon::after {
    font-size: 15px;
    background-color: rgb(${props => props.theme.error});
  }
`
