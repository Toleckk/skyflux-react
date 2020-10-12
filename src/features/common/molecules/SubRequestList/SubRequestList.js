import React, {forwardRef} from 'react'
import {SubConnectionList} from 'models/sub'
import {SubRequestCard} from '../SubRequestCard'
import {StyledList} from './styles'

export const SubRequestList = forwardRef(({subs}, ref) => (
  <StyledList ref={ref}>
    {subs.map(sub => (
      <li key={sub.cursor}>
        <SubRequestCard sub={sub.node} />
      </li>
    ))}
  </StyledList>
))

SubRequestList.displayName = 'SubRequestList'

SubRequestList.propTypes = {
  subs: SubConnectionList.isRequired,
}
