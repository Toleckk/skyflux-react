import React, {useState} from 'react'
import {withTranslation} from 'react-i18next'
import {Tab} from 'react-tabs'
import {Box, Flex} from 'reflexbox/styled-components'
import {getSubRequestsCount} from 'models/sub'
import {me} from 'models/user'
import {H2, Icon} from 'ui'
import {useMyQuery} from '../../hooks'
import {SubRequestsDisplay} from '../SubRequestsDisplay'
import {EventsDisplay} from '../EventsDisplay'
import {
  StyledDivider,
  StyledTabList,
  StyledTabPanel,
  StyledTabs,
} from './styles'

export const NotificationTabs = withTranslation('nav')(({t}) => {
  const {data, loading} = useMyQuery(getSubRequestsCount())
  const {data: meQuery} = useMyQuery(me())
  const subReqCount = data?.getSubRequestsCount

  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledTabs defaultIndex={activeTab} onSelect={setActiveTab}>
      <StyledTabList>
        <Tab>
          <Flex alignItems="center" width="100%">
            <Icon icon={'birthday'} size="1rem" />
            {activeTab === 0 && (
              <H2 flex={1} as={Box}>
                &nbsp;{t('Events')}
              </H2>
            )}
          </Flex>
          <StyledDivider />
        </Tab>
        <Tab disabled={!subReqCount || loading} hidden={!meQuery.me.private}>
          <Flex alignItems="center" width="100%">
            {activeTab === 1 && (
              <H2 flex={1} as={Box}>
                {t('Subscriptions requests')}&nbsp;
              </H2>
            )}
            <Icon icon={'user'} size="1rem" />
            <H2>&nbsp; +{subReqCount || 0}</H2>
          </Flex>
          <StyledDivider />
        </Tab>
      </StyledTabList>

      <StyledTabPanel>
        <EventsDisplay />
      </StyledTabPanel>
      <StyledTabPanel>
        <SubRequestsDisplay />
      </StyledTabPanel>
    </StyledTabs>
  )
})
