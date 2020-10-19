import {useCallback, useEffect, useState} from 'react'
import {useAsyncFn} from 'react-use'
import {uploadFileToCloudinary} from 'utils'

export const useUploadAvatar = () => {
  const [avatar, setAvatar] = useState(undefined)

  const [{loading, value = {secure_url: undefined}}, upload] = useAsyncFn(
    file => uploadFileToCloudinary(file),
    [],
  )

  useEffect(() => void (value.secure_url && setAvatar(value.secure_url)), [
    value.secure_url,
    setAvatar,
  ])

  const reset = useCallback(() => setAvatar(undefined), [setAvatar])

  return {loading, avatar, upload, reset}
}
