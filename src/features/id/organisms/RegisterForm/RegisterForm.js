import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Divider, Input, Text} from '../../../../ui'
import {SubmitButton} from '../../atoms'

export const RegisterForm = () => (
  <>
    <Divider />
    <Flex width="90%" justifyContent="space-between" alignItems="center">
      <Box flex={1} marginRight="2rem">
        <Text as="label" for="nickname">
          Придумайте уникальное имя, по которому другие пользователи смогут Вас
          найти
        </Text>
      </Box>
      <Box width="40%">
        <Input id="nickname" name="nickname" label="Ник" />
      </Box>
    </Flex>
    <Divider />
    <Flex width="90%" justifyContent="space-between" alignItems="center">
      <Box flex={1} marginRight="2rem">
        <Text as="label" for="email">
          Введите Ваш действительный адрес электронной почты
        </Text>
      </Box>
      <Box width="40%">
        <Input id="email" name="email" label="Электронная почта" />
      </Box>
    </Flex>
    <Divider />
    <SubmitButton>Далее</SubmitButton>
  </>
)
