import noop from 'noop6'
import {useCallback} from 'react'
import {useMergedListeners} from './useMergedListeners'

export const useFormEnter = ({
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

export const focus = input => {
  const {length} = input.value

  input.focus()
  input.setSelectionRange(length, length)
}

export const submitForm = form => {
  const submitButton = form?.querySelector('button[type=submit]')

  return submitButton?.click()
}

export const getForm = input => input?.closest('form')

export const getFormInputs = form =>
  form ? [...form.querySelectorAll('*[name]')] : []
