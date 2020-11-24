import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Text} from 'typography'
import {Divider, Input} from 'ui'
import {SubmitButton} from '../../atoms'
import {useRegisterForm} from '../../hooks'
import {StyledResponsibleGrid} from './styles'

export const RegisterForm: React.FC = () => {
  const {t} = useTranslation('id')

  const {submit, register, errors} = useRegisterForm()

  return (
    <Flex
      as="form"
      flexDirection="column"
      alignItems="center"
      onSubmit={submit}
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
          error={t(errors.email as string)}
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
          error={t(errors.password as string)}
          ref={register}
        />
      </StyledResponsibleGrid>
      <Divider />
      <SubmitButton>{t('Next')}</SubmitButton>
    </Flex>
  )
}
