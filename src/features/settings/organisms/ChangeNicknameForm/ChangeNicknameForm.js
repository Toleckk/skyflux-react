import React, {useCallback, useEffect} from 'react'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {nickname} from 'validation'
import {Button, Input} from 'ui'
import {useDebouncedFunc} from 'utils'
import {doesNicknameExist, updateNickname, User} from 'models/user'
import {useMyLazyQuery, useMyMutation} from 'features/common/hooks'
import {ResponsibleForm} from '../../atoms'

const schema = yup.object().shape({nickname: nickname.required()})

export const ChangeNicknameForm = ({user}) => {
  const {t} = useTranslation('settings')

  const [update, {loading: updating}] = useMyMutation(updateNickname())

  const [execExistsQuery, {data, loading}] = useMyLazyQuery(doesNicknameExist())
  const [doesExistDebounced, delayed] = useDebouncedFunc(execExistsQuery, 1000)
  const isLoading = loading || delayed

  const {register, errors, handleSubmit, watch} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const {nickname} = watch()

  useEffect(() => {
    if (!errors.nickname && nickname) doesExistDebounced({nickname})
  }, [errors.nickname, nickname, doesExistDebounced])

  const onSubmit = useCallback(
    handleSubmit(
      formData => !isLoading && !data?.doesNicknameExist && update(formData),
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
        error={
          errors.nickname?.message ||
          (data?.doesNicknameExist && t('Nickname already exists'))
        }
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

ChangeNicknameForm.propTypes = {
  user: User,
}
