import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {Box, Flex} from 'reflexbox/styled-components'
import {Button, Divider, H1, H2, Input, Toggle} from '../../../../ui'
import {AvatarUploader, DateInput} from '../../molecules'

const user = {
  _id: 1,
  nickname: 'toleckk',
  avatar:
    'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
}

export const Common = () => (
  <div>
    <H1>Информация профиля</H1>
    <Box>
      <Flex justifyContent="space-between" marginBottom="1rem">
        <Box width="9rem" height="9rem">
          <AvatarUploader value={user.avatar} />
        </Box>
        <Box width="50%">
          <DateInput label="Дата рождения" placeholderText="" />
          <Input label="Откуда" />
        </Box>
      </Flex>
      <Input multi />
    </Box>
    <Divider />
    <H1>Настройки приватности</H1>
    <Flex alignItems="center">
      <H2>Закрытый профиль</H2>
      <Box marginLeft="2rem">
        <Toggle />
      </Box>
    </Flex>
    <Divider />
    <H1>Данные для входа</H1>
    <Box width="40%">
      <Input type="password" label="Старый пароль" />
      <Box marginTop="1rem">
        <Input type="password" label="Новый пароль" />
      </Box>
      <Box marginTop="1rem">
        <Button>Изменить</Button>
      </Box>
    </Box>
    <Divider />
  </div>
)
