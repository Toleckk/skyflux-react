import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {H2, Icon} from 'ui'
import {me} from 'models/user'
import {useMyQuery} from '../../hooks'
import {StyledDivider, StyledTab} from './styles'

export const RequestsTab = ({selected, onClick, count}) => {
  const {data} = useMyQuery(me())

  return (
    <StyledTab
      onClick={onClick}
      disabled={!count}
      hidden={!data.me.private}
      selected={selected}
    >
      <Flex alignItems="center" width="100%">
        {selected && (
          <H2 flex={1} as={Box}>
            <Translation ns="nav">
              {t => t('Subscriptions requests')}
            </Translation>
            &nbsp;
          </H2>
        )}
        <Icon icon={'user'} size="1rem" />
        <H2>&nbsp; +{count}</H2>
      </Flex>
      <StyledDivider />
    </StyledTab>
  )
}

RequestsTab.defaultProps = {
  selected: false,
}

RequestsTab.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  count: PropTypes.number.isRequired,
}
