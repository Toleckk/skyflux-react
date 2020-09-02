import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Divider, Input, Text} from '../../../../ui'
import {SubmitButton} from '../../atoms'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/),
})

export const RegisterForm = withTranslation('id')(({t}) => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

  return (
    <Flex
      as="form"
      flexDirection="column"
      alignItems="center"
      onSubmit={onSubmit}
    >
      <Divider />
      <Flex width="90%" justifyContent="space-between" alignItems="center">
        <Box flex={1} marginRight="2rem">
          <Text as="label" htmlFor="email">
            {t('Enter your email')}
          </Text>
        </Box>
        <Box width="40%">
          <Input
            id="email"
            name="email"
            label={t('Электронная почта')}
            error={errors.email?.message}
            ref={register}
          />
        </Box>
      </Flex>
      <Divider />
      <Flex width="90%" justifyContent="space-between" alignItems="center">
        <Box flex={1} marginRight="2rem">
          <Text as="label" htmlFor="password">
            {t('Password should be')}
          </Text>
        </Box>
        <Box width="40%">
          <Input
            id="password"
            name="password"
            label={t('Password')}
            type="password"
            error={errors.password?.message}
            ref={register}
          />
        </Box>
      </Flex>
      <Divider />
      <SubmitButton>{t('Next')}</SubmitButton>
    </Flex>
  )
})
