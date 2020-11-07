import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useMyTitle} from 'features/common/hooks'
import {H1} from 'ui'
import {PageDescription} from '../../atoms'
import {RegisterForm} from '../../organisms'

export const Register = () => {
  const {t} = useTranslation('id')
  useMyTitle(t('Registration'))

  return (
    <Flex alignItems="center" flexDirection="column">
      <H1>{t('Create an account')}</H1>
      <PageDescription>{t('You are on registration page')}</PageDescription>
      <RegisterForm />
    </Flex>
  )
}
