import React, {Suspense, useState} from 'react'
import {Translation} from 'react-i18next'
import SwipeableViews from 'react-swipeable-views'
import {Box, Flex} from 'reflexbox/styled-components'
import {getSubRequestsCount} from 'models/sub'
import {me} from 'models/user'
import {H2, Icon, Loader} from 'ui'
import {useMyQuery} from '../../hooks'
import {SubRequestsDisplay} from '../SubRequestsDisplay'
import {EventsDisplay} from '../EventsDisplay'
import {StyledDivider, StyledTab, StyledTabList, StyledTabs} from './styles'

export const NotificationTabs = () => {
  const {data, loading} = useMyQuery(getSubRequestsCount())
  const {data: meQuery} = useMyQuery(me())
  const subReqCount = data?.getSubRequestsCount

  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledTabs>
      <Suspense fallback={<Loader />}>
        <StyledTabList>
          <StyledTab onClick={() => setActiveTab(0)} selected={activeTab === 0}>
            <Flex alignItems="center" width="100%">
              <Icon icon={'birthday'} size="1rem" />
              {activeTab === 0 && (
                <H2 flex={1} as={Box}>
                  &nbsp;<Translation ns="nav">{t => t('Events')}</Translation>
                </H2>
              )}
            </Flex>
            <StyledDivider />
          </StyledTab>
          <StyledTab
            onClick={() => setActiveTab(1)}
            disabled={!subReqCount || loading}
            hidden={!meQuery.me.private}
            selected={activeTab === 1}
          >
            <Flex alignItems="center" width="100%">
              {activeTab === 1 && (
                <H2 flex={1} as={Box}>
                  <Translation ns="nav">
                    {t => t('Subscriptions requests')}
                  </Translation>
                  &nbsp;
                </H2>
              )}
              <Icon icon={'user'} size="1rem" />
              <H2>&nbsp; +{subReqCount || 0}</H2>
            </Flex>
            <StyledDivider />
          </StyledTab>
        </StyledTabList>

        <SwipeableViews
          index={activeTab}
          onChangeIndex={setActiveTab}
          style={{flex: 1}}
          containerStyle={{height: '100%'}}
        >
          <EventsDisplay />
          <SubRequestsDisplay />
        </SwipeableViews>
      </Suspense>
    </StyledTabs>
  )
}
