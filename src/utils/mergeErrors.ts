import {ApolloError, isApolloError} from '@apollo/client'
import {FieldErrors} from 'react-hook-form'
import {GraphQLError} from 'graphql'

export const mergeErrors = <T extends Record<string, any>>(
  ...errors: ErrorType[]
): T =>
  errors
    .map(extractMessages)
    .filter((e): e is Record<string, any> => !!e)
    .reduce((a, b) => ({...a, ...b}), {}) as T

const extractMessages = (error: ErrorType) => {
  if (!error) return undefined

  if (Object.values(error).every(e => typeof e === 'string')) return error

  if (
    typeof error === 'object' &&
    error instanceof Error &&
    isApolloError(error)
  ) {
    if (!error || !error.graphQLErrors) return {}

    const extensions = error.graphQLErrors
      .filter(
        (err): err is GraphQLFieldError =>
          !!err.extensions &&
          typeof err.extensions === 'object' &&
          'exception' in err.extensions &&
          Object.values(err.extensions.exception).every(
            e => typeof e === 'string',
          ),
      )
      .map(e => e.extensions)
    if (!extensions.length) return {}

    return extensions.reduce(
      (errors, {exception}) => ({...errors, ...exception}),
      {},
    )
  }

  return extractMessageFromFieldErrors(error)
}

const extractMessageFromFieldErrors = (err: FieldErrors): Record<string, any> =>
  filterObj(
    mapObj(err, e => {
      if (!e) return undefined

      if ('message' in e) return e.message

      return extractMessageFromFieldErrors(e)
    }),
    e => !!e,
  )

type ErrorType = Record<string, string> | ApolloError | FieldErrors | undefined

type GraphQLFieldError = Omit<GraphQLError, 'extensions'> & {
  extensions: {
    exception: Record<string, string>
  }
}

const filterObj = <T extends Record<string, any>>(
  obj: T,
  fn: <K extends keyof T>(v: T[K]) => boolean,
) => {
  const keys: (keyof T)[] = Object.keys(obj)

  return keys
    .filter(key => fn(obj[key]))
    .reduce((acc, key) => ({...acc, [key]: obj[key]}), {} as T)
}

const mapObj = <T extends Record<string, any>, R>(
  obj: T,
  fn: <K extends keyof T>(v: T[K]) => R,
): Record<keyof T, R> => {
  const keys: (keyof T)[] = Object.keys(obj)
  return keys
    .map((key): [k: keyof T, v: R] => [key, fn(obj[key])])
    .reduce((acc, [key, v]) => ({...acc, [key]: v}), {} as T)
}
