import map from 'map-obj'
import {ApolloError} from '@apollo/client'
import {DeepMap, FieldError} from 'react-hook-form'

export const mergeErrors = (
  ...errors: (
    | Record<string, string>
    | ApolloError
    | DeepMap<any, FieldError>
    | undefined
  )[]
): Error => errors.map(extractMessages).reduce((a, b) => ({...a, ...b}), {})

interface Error {
  [index: string]: string | {message: string} | Error | undefined
}

export const extractMessages = (
  error: Error | ApolloError | DeepMap<any, FieldError> = {},
): Error =>
  map(error, (key, value) => [
    key as string,
    typeof value === 'string'
      ? (value as string)
      : typeof value === 'object' && 'message' in value
      ? (value.message as Error)
      : typeof value === 'object'
      ? (extractMessages(value) as Error)
      : undefined,
  ])
