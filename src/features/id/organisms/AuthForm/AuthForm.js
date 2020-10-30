import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'
import {login, password} from 'validation'
import {useMyMutation} from 'features/common/hooks'
import {Input} from 'ui'
import {createSession} from 'models/session'
import {SubmitButton} from '../../atoms'

const schema = yup
  .object()
  .shape({login: login.required(), password: password.required()})

export const AuthForm = withTranslation('id')(({className, t}) => {
  const [login] = useMyMutation(createSession())

  const {handleSubmit, register, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(login), [handleSubmit, login])

  return (
    <form className={className} onSubmit={onSubmit}>
      <Flex flexDirection="column">
        <Input
          label={t('Login')}
          name="login"
          ref={register}
          error={errors.login?.message}
        />
        <Box marginTop="1rem">
          <Input
            label={t('Password')}
            name="password"
            type="password"
            error={errors.password?.message}
            ref={register}
          />
        </Box>
        <Box marginTop="2rem" alignSelf="center">
          <SubmitButton>{t('Sign in')}</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
})

AuthForm.defaultProps = {
  className: null,
}

AuthForm.propTypes = {
  className: PropTypes.string,
}
