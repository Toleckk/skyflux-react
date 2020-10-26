import styled from 'styled-components'
import {Link} from 'ui'

export const StyledEllipsisLink = styled(Link)`
  max-width: 100%;

  display: block;
  padding-bottom: 3px;

  overflow: hidden;
  text-overflow: ellipsis;

  &::after {
    bottom: 0;
  }
`
