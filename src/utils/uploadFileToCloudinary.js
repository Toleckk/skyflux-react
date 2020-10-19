export const uploadFileToCloudinary = file => {
  const body = new FormData()

  body.append('upload_preset', process.env.REACT_APP_CDN_UPLOAD_PRESET)
  body.append('file', file)

  return fetch(process.env.REACT_APP_CDN_UPLOAD_URL, {
    method: 'post',
    body,
  }).then(response => response.json())
}
