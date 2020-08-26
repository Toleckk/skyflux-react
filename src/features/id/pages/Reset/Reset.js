import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {FieldDescription, PageDescription} from '../../atoms'
import {Divider, H1} from '../../../../ui'
import {ResetForm} from '../../organisms'

export const Reset = () => (
  <Flex flexDirection="column" alignItems="center">
    <H1>Придумайте новый пароль</H1>
    <PageDescription>
      Активные сеансы с этой учётной записью на всех устройствах будут завершены
    </PageDescription>
    <Divider />
    <FieldDescription>
      Пароль должен состоять как минимум из 8 символов и содержать цифры и буквы
      в верхнем и нижнем регистрах
    </FieldDescription>
    <Box width="35%">
      <ResetForm />
    </Box>
    <Divider />
  </Flex>
)
