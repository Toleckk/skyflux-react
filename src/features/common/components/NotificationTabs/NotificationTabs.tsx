import React, {Suspense, useState} from 'react'
import SwipeableViews from 'react-swipeable-views'
import {Loader} from '@skyflux/react/ui'
import {StyledTabList, StyledTabs} from './styles'
import {EventsTab} from './EventsTab'
import {RequestsTab} from './RequestsTab'
import {EventsDisplay, SubRequestsDisplay} from '..'
import {useSubRequestsCount} from '../../hooks'

export const NotificationTabs: React.FC = () => {
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
