import React from 'react'
import {useTranslation} from 'react-i18next'
import {Text} from '@skyflux/react/typography'
import {Divider, Input, Loader} from '@skyflux/react/ui'
import {
  StyledAbsolute,
  StyledRelativeForm,
  StyledResponsibleGrid,
} from './styles'
import {SubmitButton} from '../SubmitButton'
import {useRegisterForm} from '../../hooks'

export const RegisterForm: React.FC = () => {
  const {t} = useTranslation('id')

  const {submit, register, errors, submitting} = useRegisterForm()

  return (
    <StyledRelativeForm onSubmit={submit}>
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
      {submitting && (
        <StyledAbsolute>
          <Loader />
        </StyledAbsolute>
      )}
    </StyledRelativeForm>
  )
}
