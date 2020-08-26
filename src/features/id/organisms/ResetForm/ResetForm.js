import React from 'react'
import {useParams} from 'react-router'
import {Box, Flex} from 'reflexbox/styled-components'
import {SubmitButton} from '../../atoms'
import {Input} from '../../../../ui'

export const ResetForm = () => {
  const {token} = useParams()

  return (
    <form>
      <input name="token" hidden readOnly value={token} />
      <Flex flexDirection="column">
        <Box marginTop="1em">
          <Input label="Пароль" id="password" type="password" />
        </Box>
        <Box marginTop="1em">
          <Input label="Подтвердите пароль" id="confirm" type="password" />
        </Box>
        <Box marginTop="1.5em" alignSelf="center">
          <SubmitButton>Далее</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
}
