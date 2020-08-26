import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {PageDescription} from '../../atoms'
import {Divider, H1, Text} from '../../../../ui'

export const Message = () => (
  <Flex flexDirection="column" alignItems="center">
    <H1>Восстановление пароля</H1>
    <PageDescription>Проверьте свою почту</PageDescription>
    <Divider />
    <Box width="60%" margin="3rem">
      <Text>
        Мы отправили письмо на почту, которая привязана к вашему аккаунту. В нём
        содержится инструкция по завершению процедуры восстановления пароля
      </Text>
    </Box>
    <Divider />
  </Flex>
)
