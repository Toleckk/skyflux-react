import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Input} from '../../../../ui'
import {FieldDescription, SubmitButton} from '../../atoms'

export const RestoreForm = () => (
  <Flex flexDirection="column" alignItems="center">
    <FieldDescription>
      Введите Ваш никнейм или адрес электронной почты, к которому привязан Ваш
      аккаунт
    </FieldDescription>
    <Box marginTop="1em">
      <form>
        <Input label={'Логин'} id={'login'} name={'login'} />
        <Flex marginTop="1.5em" justifyContent="center">
          <SubmitButton>Далее</SubmitButton>
        </Flex>
      </form>
    </Box>
  </Flex>
)
