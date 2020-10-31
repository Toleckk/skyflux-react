import map from 'map-obj'

export const mergeErrors = (...errors) =>
  errors.map(extractMessages).reduce((a, b) => ({...a, ...b}), {})

export const extractMessages = (error = {}) =>
  map(error, (key, value) => [
    key,
    typeof value === 'string'
      ? value
      : typeof value === 'object' && 'message' in value
      ? value.message
      : typeof value === 'object'
      ? extractMessages(value)
      : undefined,
  ])
