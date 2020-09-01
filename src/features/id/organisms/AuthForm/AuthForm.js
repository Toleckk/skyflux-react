import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Input} from '../../../../ui'
import {SubmitButton} from '../../atoms'

export const AuthForm = withTranslation('id')(({className, t}) => (
  <form className={className}>
    <Flex flexDirection="column">
      <Input label={t('Login')} name="login" />
      <Box marginTop="15px">
        <Input label={t('Password')} name="password" type="password" />
      </Box>
      <Box marginTop="30px" alignSelf="center">
        <SubmitButton>{t('Sign in')}</SubmitButton>
      </Box>
    </Flex>
  </form>
))

AuthForm.defaultProps = {
  className: null,
}

AuthForm.propTypes = {
  className: PropTypes.string,
}
