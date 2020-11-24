import styled from 'styled-components'
import {MOBILE_NAV_HEIGHT} from '../../../components'

export const StyledChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  width: calc(100vw - 1rem);
  padding-bottom: ${MOBILE_NAV_HEIGHT};

  @media (min-width: 768px) {
    width: 55vw;
    padding-bottom: 1rem;
  }
`
