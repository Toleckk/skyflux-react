import {useCallback, useEffect, useState} from 'react'
import {useAsyncFn} from 'react-use'
import {uploadFileToCloudinary} from 'utils'

export const useUploadAvatar = def => {
  const [avatar, setAvatar] = useState(def)

  const [{loading, value = {secure_url: def}}, upload] = useAsyncFn(
    file => uploadFileToCloudinary(file),
    [],
  )

  useEffect(() => setAvatar(value.secure_url), [value.secure_url, setAvatar])

  const reset = useCallback(() => setAvatar(def), [setAvatar, def])

  const remove = useCallback(() => setAvatar(undefined), [setAvatar])

  return {loading, avatar, upload, reset, remove}
}
