import React, {MouseEventHandler} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {H2} from '@skyflux/react/typography'
import {Icon} from '@skyflux/react/ui'
import {useMe} from '@skyflux/react/features/shared/hooks'
import {StyledDivider, StyledTab} from './styles'

export type RequestsTabProps = {
  count: number
  selected?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const RequestsTab: React.FC<RequestsTabProps> = ({
  selected,
  onClick,
  count,
}) => {
  const {me} = useMe()

  return (
    <StyledTab
      onClick={onClick}
      disabled={!count}
      hidden={!me?.private}
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
