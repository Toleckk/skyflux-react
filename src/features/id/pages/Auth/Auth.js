import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {AuthForm} from '../../organisms'
import {FieldDescription, PageDescription, SubmitButton} from '../../atoms'
import {Divider, H1, Link} from '../../../../ui'

export const Auth = () => (
  <Flex alignItems="center" flexDirection="column">
    <H1>Позвольте всем узнать о ваших мыслях</H1>
    <PageDescription>Войдите в свой аккаунт прямо сейчас</PageDescription>
    <Divider />
    <Box width="35%">
      <AuthForm />
    </Box>
    <Box marginTop="15px" alignSelf="center">
      <Link to="/restore">Забыли пароль?</Link>
    </Box>
    <Divider />
    <FieldDescription>
      Нет аккаунта? Присоединяйтесь! Нас уже 100000
    </FieldDescription>
    <SubmitButton as={RouterLink} to="/register">
      Регистрация
    </SubmitButton>
  </Flex>
)
