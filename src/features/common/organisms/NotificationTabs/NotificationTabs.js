import React, {Suspense, useState} from 'react'
import SwipeableViews from 'react-swipeable-views'
import {subRequestsCount} from 'models/sub'
import {Loader} from 'ui'
import {useMyQuery} from '../../hooks'
import {SubRequestsDisplay} from '../SubRequestsDisplay'
import {EventsDisplay} from '../EventsDisplay'
import {StyledTabList, StyledTabs} from './styles'
import {EventsTab} from './EventsTab'
import {RequestsTab} from './RequestsTab'

export const NotificationTabs = () => {
  const {data, loading} = useMyQuery(subRequestsCount())
  const subReqCount = data?.subRequestsCount

  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledTabs>
      <Suspense fallback={<Loader />}>
        <StyledTabList>
          <EventsTab
            selected={activeTab === 0}
            onClick={() => setActiveTab(0)}
          />
          <RequestsTab
            onClick={() => setActiveTab(1)}
            disabled={!subReqCount || loading}
            selected={activeTab === 1}
          />
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
