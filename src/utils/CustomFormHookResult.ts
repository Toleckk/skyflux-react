import {UseFormMethods} from 'react-hook-form'
import {BaseSyntheticEvent} from 'react'

export type CustomFormHookResult<T extends Fields> = Omit<
  UseFormMethods<T>,
  'handleSubmit' | 'errors'
> & {
  submit: (e?: BaseSyntheticEvent) => Promise<void>
  submitting: boolean
  errors: Errors<T>
}

export type Errors<T extends Fields> = {
  [Key in keyof T]: ErrorType<T, Key>
}

export type ErrorType<
  T extends Fields,
  Key extends keyof T
> = T[Key] extends Fields
  ? Errors<T[Key]>
  : T[Key] extends string
  ? string
  : undefined

export type Fields = Record<string, any>
