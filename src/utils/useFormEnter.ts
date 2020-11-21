import noop from 'noop6'
import {KeyboardEventHandler, useCallback} from 'react'
import {useMergedListeners} from './useMergedListeners'

export type UseFormEnter = (options: {
  onKeyDown?: KeyboardEventHandler
  ignoreAll?: boolean
  tab?: boolean
  submit?: boolean
}) => KeyboardEventHandler

export const useFormEnter: UseFormEnter = ({
  onKeyDown = noop,
  ignoreAll = false,
  tab = true,
  submit = true,
}) => {
  const onEnter = useCallback(
    ({target}) => {
      const form = getForm(target)
      const inputs = getFormInputs(form)

      const i = inputs.indexOf(target)

      if (i < inputs.length - 1)
        return !ignoreAll && tab && focus(inputs[i + 1])

      return !ignoreAll && submit && submitForm(form)
    },
    [ignoreAll, tab, submit],
  )

  const onEnterDown = useCallback(
    e => {
      if (e.keyCode === 13) {
        e.preventDefault()
        onEnter(e)
      }
    },
    [onEnter],
  )

  return useMergedListeners([onEnterDown, onKeyDown])
}

export const focus = (input: HTMLInputElement): void => {
  const {length} = input.value

  input.focus()
  input.setSelectionRange(length, length)
}

export const submitForm = (form: HTMLFormElement | null): void => {
  const submitButton = form?.querySelector<HTMLButtonElement>(
    'button[type=submit]',
  )

  return submitButton?.click()
}

export const getForm = (input: HTMLInputElement): HTMLFormElement | null =>
  input?.closest('form')

export const getFormInputs = (
  form: HTMLFormElement | null,
): HTMLInputElement[] =>
  form ? [...form.querySelectorAll<HTMLInputElement>('*[name]')] : []
