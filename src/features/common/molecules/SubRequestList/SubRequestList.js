import React, {forwardRef} from 'react'
import {SubConnectionList} from 'models/sub'
import {SubRequestCard} from '../SubRequestCard'
import {StyledItem, StyledList} from './styles'

export const SubRequestList = forwardRef(({subs}, ref) => (
  <StyledList ref={ref}>
    {subs.map(sub => (
      <StyledItem key={sub.cursor}>
        <SubRequestCard sub={sub.node} />
      </StyledItem>
    ))}
  </StyledList>
))

SubRequestList.displayName = 'SubRequestList'

SubRequestList.propTypes = {
  subs: SubConnectionList.isRequired,
}
