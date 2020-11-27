import {useCallback, useEffect, useMemo} from 'react'
import {useForm} from 'react-hook-form'
import {useMutation} from '@apollo/client'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {avatar, description} from '@skyflux/react/validation'
import {CustomFormHookResult, mergeErrors} from '@skyflux/react/utils'
import {useUploadAvatar, UseUploadAvatarResult} from './useUploadAvatar'
import {
  MyProfile_me,
  UPDATE_PROFILE_INFO,
  UpdateProfileInfoVariables,
} from '../graphql'

export type A = CustomFormHookResult<UpdateProfileInfoVariables>

export type UseProfileDataFormResult = CustomFormHookResult<UpdateProfileInfoVariables> & {
  avatar: UseUploadAvatarResult['avatar']
  uploadAvatar: UseUploadAvatarResult['upload']
  avatarUploading: UseUploadAvatarResult['loading']
  removeAvatar: UseUploadAvatarResult['remove']
}

const schema = yup.object().shape({
  avatar,
  description: description.required(),
})

export const useProfileDataForm = (
  user: MyProfile_me,
): UseProfileDataFormResult => {
  const [update, {error, loading}] = useMutation(UPDATE_PROFILE_INFO)

  const {
    reset,
    handleSubmit,
    errors,
    ...formMethods
  } = useForm<UpdateProfileInfoVariables>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const {
    avatar,
    reset: resetAvatar,
    loading: avatarUploading,
    remove: removeAvatar,
    upload: uploadAvatar,
  } = useUploadAvatar(user.avatar)

  const resetForm = useCallback(() => {
    reset()
    resetAvatar()
  }, [reset, resetAvatar])

  const submit = useMemo(() => handleSubmit(variables => update({variables})), [
    handleSubmit,
    update,
  ])

  useEffect(resetForm, [resetForm, user])

  return {
    submit,
    submitting: loading,
    errors: mergeErrors(error, errors),
    reset: resetForm,
    ...formMethods,
    avatar,
    avatarUploading,
    removeAvatar,
    uploadAvatar,
  }
}
