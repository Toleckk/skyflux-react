import React, {useCallback} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {email, password} from 'validation'
import {mergeErrors} from 'utils'
import {Divider, Input, Text} from 'ui'
import {useMyMutation} from 'features/common/hooks'
import {createUser} from 'models/user'
import {SubmitButton} from '../../atoms'
import {StyledResponsibleGrid} from './styles'

const schema = yup.object().shape({
  email: email.required(),
  password: password.required(),
})

export const RegisterForm = withTranslation('id')(({t}) => {
  const [signUp, {error}] = useMyMutation({
    ...createUser(),
    asyncMode: true,
  })

  const {register, handleSubmit, errors: formErrors} = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const errors = mergeErrors(error, formErrors)

  const onSubmit = useCallback(handleSubmit(signUp), [handleSubmit])

  return (
    <Flex
      as="form"
      flexDirection="column"
      alignItems="center"
      onSubmit={onSubmit}
    >
      <Divider />
      <StyledResponsibleGrid>
        <Text as="label" htmlFor="email">
          {t('Enter your email')}
        </Text>
        <Input
          id="email"
          name="email"
          label={t('Email')}
          error={t(errors.email)}
          ref={register}
        />
      </StyledResponsibleGrid>
      <Divider />
      <StyledResponsibleGrid>
        <Text as="label" htmlFor="password">
          {t('Password should be')}
        </Text>
        <Input
          id="password"
          name="password"
          label={t('Password')}
          type="password"
          error={t(errors.password)}
          ref={register}
        />
      </StyledResponsibleGrid>
      <Divider />
      <SubmitButton>{t('Next')}</SubmitButton>
    </Flex>
  )
})
