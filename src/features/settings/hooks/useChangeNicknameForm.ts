import {useEffect, useMemo} from 'react'
import {useLazyQuery, useMutation} from '@apollo/client'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  CustomFormHookResult,
  mergeErrors,
  useDebouncedFunc,
} from '@skyflux/react/utils'
import {nickname} from '@skyflux/react/validation'
import {
  DOES_NICKNAME_EXIST,
  UPDATE_NICKNAME,
  UpdateNicknameVariables,
} from '../graphql'

export type UseChangeNicknameFormResult = CustomFormHookResult<UpdateNicknameVariables> & {
  nicknameUniquenessLoading: boolean
}

const schema = yup.object().shape({nickname: nickname.required()})

export const useChangeNicknameForm = (): UseChangeNicknameFormResult => {
  const [update, {loading: submitting, error}] = useMutation(UPDATE_NICKNAME)

  const [
    execExistsQuery,
    {data, loading: nicknameUniquenessLoading},
  ] = useLazyQuery(DOES_NICKNAME_EXIST)
  const [doesExistDebounced, delayed] = useDebouncedFunc(execExistsQuery, 1000)
  const isLoading = nicknameUniquenessLoading || delayed

  const {
    errors,
    handleSubmit,
    watch,
    ...rest
  } = useForm<UpdateNicknameVariables>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const {nickname} = watch()

  useEffect(() => {
    if (!errors.nickname && nickname)
      doesExistDebounced({variables: {nickname}})
  }, [errors.nickname, nickname, doesExistDebounced])

  const submit = useMemo(
    () =>
      handleSubmit(
        variables =>
          !isLoading && !data?.doesNicknameExist && update({variables}),
      ),
    [handleSubmit, isLoading, update, data],
  )

  return {
    submit,
    submitting,
    nicknameUniquenessLoading: isLoading,
    errors: mergeErrors(
      {nickname: !!data?.doesNicknameExist && 'Nickname already exists'},
      error,
      errors,
    ),
    watch,
    ...rest,
  }
}
