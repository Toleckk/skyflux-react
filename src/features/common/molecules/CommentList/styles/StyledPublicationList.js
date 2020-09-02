import styled from 'styled-components'
import {PublicationList} from 'features/common/molecules'

export const StyledPublicationList = styled(PublicationList)`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`
