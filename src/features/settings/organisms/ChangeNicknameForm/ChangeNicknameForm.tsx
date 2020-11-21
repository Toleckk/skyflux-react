import React, {useEffect, useMemo} from 'react'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useLazyQuery, useMutation} from '@apollo/client'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {nickname} from 'validation'
import {Button, Input} from 'ui'
import {mergeErrors, useDebouncedFunc} from 'utils'
import {ResponsibleForm} from '../../atoms'
import {DOES_NICKNAME_EXIST, UPDATE_NICKNAME} from '../../graphql'
import {MyProfile_me} from '../../graphql/types/MyProfile'
import {UpdateNicknameVariables} from '../../graphql/types/UpdateNickname'

const schema = yup.object().shape({nickname: nickname.required()})

export type ChangeNicknameFormProps = {
  user: MyProfile_me
}

export const ChangeNicknameForm: React.FC<ChangeNicknameFormProps> = ({
  user,
}) => {
  const {t} = useTranslation('settings')

  const [update, {loading: updating, error}] = useMutation(UPDATE_NICKNAME)

  const [execExistsQuery, {data, loading}] = useLazyQuery(DOES_NICKNAME_EXIST)
  const [doesExistDebounced, delayed] = useDebouncedFunc(execExistsQuery, 1000)
  const isLoading = loading || delayed

  const {
    register,
    errors: formErrors,
    handleSubmit,
    watch,
  } = useForm<UpdateNicknameVariables>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const {nickname} = watch()

  useEffect(() => {
    if (!formErrors.nickname && nickname)
      doesExistDebounced({variables: {nickname}})
  }, [formErrors.nickname, nickname, doesExistDebounced])

  const errors = mergeErrors(
    {nickname: !!data?.doesNicknameExist && 'Nickname already exists'},
    error,
    formErrors,
  )

  const onSubmit = useMemo(
    () =>
      handleSubmit(
        variables =>
          !isLoading && !data?.doesNicknameExist && update({variables}),
      ),
    [handleSubmit, isLoading, update, data],
  )

  return (
    <ResponsibleForm onSubmit={onSubmit}>
      <Input
        ref={register}
        name="nickname"
        label={t('New nickname')}
        placeholder={user.nickname}
        error={t(errors.nickname as string)}
        isLoading={isLoading}
      />
      <Box marginTop="1rem">
        <Button type="submit" disabled={updating}>
          {t('Change')}
        </Button>
      </Box>
    </ResponsibleForm>
  )
}
