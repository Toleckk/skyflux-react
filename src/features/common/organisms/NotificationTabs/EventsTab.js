import React from 'react'
import PropTypes from 'prop-types'
import {Translation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {H2} from 'typography'
import {Icon} from 'ui'
import {StyledDivider, StyledTab} from './styles'

export const EventsTab = ({selected, onClick}) => (
  <StyledTab onClick={onClick} selected={selected}>
    <Flex alignItems="center" width="100%">
      <Icon icon={'birthday'} size="1rem" />
      {selected && (
        <H2 flex={1} as={Box}>
          &nbsp;<Translation ns="nav">{t => t('Events')}</Translation>
        </H2>
      )}
    </Flex>
    <StyledDivider />
  </StyledTab>
)

EventsTab.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}
