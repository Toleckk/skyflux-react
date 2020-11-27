import React from 'react'
import {Translation} from 'react-i18next'
import {Box, Flex} from 'reflexbox/styled-components'
import {H2} from '@skyflux/react/typography'
import {Icon} from '@skyflux/react/ui'
import {StyledDivider, StyledTab} from './styles'

export type EventsTabProps = {
  selected?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const EventsTab: React.FC<EventsTabProps> = ({selected, onClick}) => (
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
