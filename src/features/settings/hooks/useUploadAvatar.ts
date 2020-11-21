import {useCallback, useEffect, useState} from 'react'
import {useAsyncFn} from 'react-use'
import {CloudinaryResponse, uploadFileToCloudinary} from 'utils'

export type UseUploadAvatarResult = {
  loading: boolean
  avatar?: string | null
  upload: (file: Blob) => Promise<CloudinaryResponse>
  reset: () => void
  remove: () => void
}

export const useUploadAvatar = (def?: string | null): UseUploadAvatarResult => {
  const [avatar, setAvatar] = useState(def)

  const [{loading, value = {secure_url: def}}, upload] = useAsyncFn(
    (file: Blob) => uploadFileToCloudinary(file),
    [],
  )

  useEffect(() => setAvatar(value.secure_url), [value.secure_url, setAvatar])

  const reset = useCallback(() => setAvatar(def), [setAvatar, def])

  const remove = useCallback(() => setAvatar(undefined), [setAvatar])

  return {loading, avatar, upload, reset, remove}
}
