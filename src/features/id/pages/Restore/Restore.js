import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {PageDescription} from '../../atoms'
import {Divider, H1} from '../../../../ui'
import {RestoreForm} from '../../organisms'

export const Restore = () => (
  <Flex flexDirection="column" alignItems="center">
    <H1>Укажите данные для восстановления</H1>
    <PageDescription>
      Эта процедура позволит Вам вернуть утерянный доступ к учётной записи
    </PageDescription>
    <Divider />
    <RestoreForm />
    <Divider />
  </Flex>
)
