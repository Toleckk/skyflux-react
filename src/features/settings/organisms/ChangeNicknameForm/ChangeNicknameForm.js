import React, {useEffect, useMemo} from 'react'
import debounce from 'debounce-fn'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {Box} from 'reflexbox/styled-components'
import {Button, Input} from 'ui'
import {doesNicknameExist, updateNickname, User} from 'models/user'
import {useMyLazyQuery, useMyMutation} from 'features/common/hooks'

const schema = yup.object().shape({
  nickname: yup
    .string()
    .matches(
      /^(?!.*__)(?!_)(?!.*_$)(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9._]{5,69}$/,
    ),
})

export const ChangeNicknameForm = ({user}) => {
  const [execExistsQuery, existing] = useMyLazyQuery(doesNicknameExist())
  const [update, {loading: updating}] = useMyMutation(updateNickname())

  const doesExistDebounced = useMemo(
    () => debounce(execExistsQuery, {wait: 1000, before: true, after: true}),
    [execExistsQuery],
  )

  const {register, errors, handleSubmit, watch} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const formData = watch()

  useEffect(() => {
    if (!errors.nickname && formData.nickname)
      doesExistDebounced({nickname: formData.nickname})
  }, [errors.nickname, formData.nickname, doesExistDebounced])

  const isLoading =
    existing.loading ||
    (!errors?.nickname &&
      (existing.variables?.nickname || '') !== (formData?.nickname || ''))

  const onSubmit = useMemo(
    () =>
      handleSubmit(data => {
        if (!isLoading && !existing.data?.doesNicknameExist) update(data)
      }),
    [handleSubmit, isLoading, existing.data, update],
  )

  return (
    <Box as="form" onSubmit={onSubmit} width="40%">
      <Input
        ref={register}
        name="nickname"
        label="Новый никнейм"
        placeholder={user.nickname}
        error={
          errors.nickname?.message ||
          (existing.data?.doesNicknameExist && 'Nickname already exists')
        }
        isLoading={isLoading}
      />
      <Box marginTop="1rem">
        <Button type="submit" disabled={updating}>
          Изменить
        </Button>
      </Box>
    </form>
  )
}

ChangeNicknameForm.propTypes = {
  user: User,
}
