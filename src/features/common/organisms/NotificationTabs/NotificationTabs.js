import React, {Suspense, useState} from 'react'
import SwipeableViews from 'react-swipeable-views'
import {Loader} from 'ui'
import {useSubRequestsCount} from '../../hooks'
import {EventsDisplay, SubRequestsDisplay} from '..'
import {StyledTabList, StyledTabs} from './styles'
import {EventsTab} from './EventsTab'
import {RequestsTab} from './RequestsTab'

export const NotificationTabs = () => {
  const {count} = useSubRequestsCount()

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
            selected={activeTab === 1}
            count={count}
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
