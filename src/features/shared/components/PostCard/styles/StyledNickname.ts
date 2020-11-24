import styled from 'styled-components'
import {Nickname} from 'typography'

export const StyledNickname = styled(Nickname)`
  flex-grow: 1;

  display: block;

  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;
`
