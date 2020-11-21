import React, {useMemo} from 'react'
import {useParams} from 'react-router'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useMutation} from '@apollo/client'
import * as yup from 'yup'
import {password} from 'validation'
import {Input} from 'ui'
import {mergeErrors} from 'utils'
import {RESET_PASSWORD} from '../../graphql'
import {SubmitButton} from '../../atoms'
import {ResetPasswordVariables} from '../../graphql/types/ResetPassword'

const schema = yup.object().shape({
  password: password.required(),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm is a required field'),
})

export const ResetForm: React.FC = () => {
  const {t} = useTranslation('id')
  const {token} = useParams<{token: string}>()

  const [reset, {error}] = useMutation(RESET_PASSWORD)

  const {
    handleSubmit,
    register,
    errors: formErrors,
  } = useForm<ResetPasswordVariables>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const errors = mergeErrors(error, formErrors)

  const onSubmit = useMemo(
    () => handleSubmit(variables => reset({variables})),
    [handleSubmit, reset],
  )

  return (
    <form onSubmit={onSubmit}>
      <input name="token" hidden readOnly value={token} ref={register} />
      <Flex flexDirection="column">
        <Box marginTop="1em">
          <Input
            label={t('Password')}
            name="password"
            type="password"
            ref={register}
            error={errors.password as string}
          />
        </Box>
        <Box marginTop="1em">
          <Input
            label={t('Confirm password')}
            name="confirm"
            type="password"
            ref={register}
            error={errors.confirm as string}
          />
        </Box>
        <Box marginTop="1.5em" alignSelf="center">
          <SubmitButton>{t('Next')}</SubmitButton>
        </Box>
      </Flex>
    </form>
  )
}
