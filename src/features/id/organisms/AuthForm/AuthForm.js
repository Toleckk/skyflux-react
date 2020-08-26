import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Input} from '../../../../ui'
import {SubmitButton} from '../../atoms/SubmitButton'

export const AuthForm = ({className}) => (
  <form className={className}>
    <Flex flexDirection="column">
      <Input label="Логин" name="login" id="login" />
      <Box marginTop="15px">
        <Input label="Пароль" name="password" type="password" id="password" />
      </Box>
      <Box marginTop="30px" alignSelf="center">
        <SubmitButton>Войти</SubmitButton>
      </Box>
    </Flex>
  </form>
)

AuthForm.defaultProps = {
  className: null,
}

AuthForm.propTypes = {
  className: PropTypes.string,
}
