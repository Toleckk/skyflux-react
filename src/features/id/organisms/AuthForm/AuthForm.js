import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'
import {login, password} from 'validation'
import {useMyMutation} from 'features/shared/hooks'
import {mergeErrors} from 'utils'
import {Input} from 'ui'
import {createSession} from 'models/session'
import {SubmitButton} from '../../atoms'

const schema = yup
  .object()
  .shape({login: login.required(), password: password.required()})

export const AuthForm = ({className}) => {
  const [login, {error}] = useMyMutation(createSession())

  const {handleSubmit, register, errors: formErrors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const errors = mergeErrors(error, formErrors)

  const onSubmit = useMemo(() => handleSubmit(login), [handleSubmit, login])

  return (
    <form className={className} onSubmit={onSubmit}>
      <Translation ns="id">
        {t => (
          <Flex flexDirection="column">
            <Input
              label={t('Login')}
              name="login"
              ref={register}
              error={t(errors.login)}
            />
            <Box marginTop="1rem">
              <Input
                label={t('Password')}
                name="password"
                type="password"
                error={t(errors.password)}
                ref={register}
              />
            </Box>
            <Box marginTop="2rem" alignSelf="center">
              <SubmitButton>{t('Sign in')}</SubmitButton>
            </Box>
          </Flex>
        )}
      </Translation>
    </form>
  )
}

AuthForm.defaultProps = {
  className: null,
}

AuthForm.propTypes = {
  className: PropTypes.string,
}
