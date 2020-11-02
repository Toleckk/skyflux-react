import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {H1} from 'ui'
import {Translation} from 'react-i18next'

export const NotFound = () => (
  <Translation ns="nav">
    {t => (
      <Flex
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <H1>{t('Page not found')}</H1>
      </Flex>
    )}
  </Translation>
)
