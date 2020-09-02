import React, {useCallback} from 'react'
import {useParams} from 'react-router'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Input} from 'ui'
import {SubmitButton} from '../../atoms'

const schema = yup.object().shape({
  password: yup
    .string()
    .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'Invalid password')
    .required(),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm is a required field'),
})

export const ResetForm = () => {
  const {t} = useTranslation('id')
  const {token} = useParams()

  const {handleSubmit, register, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

  return (
    <form onSubmit={onSubmit}>
      <input name="token" hidden readOnly value={token} />
      <Flex flexDirection="column">
        <Box marginTop="1em">
          <Input
            label={t('Password')}
            name="password"
            type="password"
            ref={register}
            error={errors.password?.message}
          />
        </Box>
        <Box marginTop="1em">
          <Input
            label={t('Confirm password')}
            name="confirm"
            type="password"
            ref={register}
            error={errors.confirm?.message}
          />
        </Box>
        <Box marginTop="1.5em" alignSelf="center">
          <SubmitButton>{t('Next')}</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
}
