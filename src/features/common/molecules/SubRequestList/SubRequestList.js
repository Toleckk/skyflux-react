import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {SubConnectionList} from 'models/sub'
import {Loader} from 'ui'
import {SubRequestCard} from '../SubRequestCard'
import {StyledList, StyledLoaderContainer} from './styles'

export const SubRequestList = forwardRef(({subs, loading}, ref) => (
  <StyledList ref={ref}>
    {subs.map(sub => (
      <li key={sub.cursor}>
        <SubRequestCard sub={sub.node} />
      </li>
    ))}
    {loading && (
      <StyledLoaderContainer>
        <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
      </StyledLoaderContainer>
    )}
  </StyledList>
))

SubRequestList.displayName = 'SubRequestList'

SubRequestList.defaultProps = {
  loading: false,
}

SubRequestList.propTypes = {
  subs: SubConnectionList.isRequired,
  loading: PropTypes.bool,
}
