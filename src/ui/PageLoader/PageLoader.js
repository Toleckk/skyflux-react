import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Loader} from '../Loader'

export const PageLoader = () => (
  <Flex
    height="100vh"
    width="100vw"
    alignItems="center"
    justifyContent="center"
  >
    <Loader />
  </Flex>
)
