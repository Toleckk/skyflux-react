import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {H1} from '../../../../ui'
import {PageDescription} from '../../atoms'
import {RegisterForm} from '../../organisms'

export const Register = () => (
  <Flex alignItems="center" flexDirection="column">
    <H1>Создайте учётную запись</H1>
    <PageDescription>
      Вы попали на страничку регистрации! Заполните пустые поля и нажмите
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      "Далее", чтобы перейти к следующему этапу
    </PageDescription>
    <RegisterForm />
  </Flex>
)
