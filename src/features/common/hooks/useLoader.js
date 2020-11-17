import {useEffect, useRef} from 'react'
import {makeVar, useReactiveVar} from '@apollo/client'

export const useLoader = isLoading => {
  const ref = useRef()

  const loadingRefs = useReactiveVar(loadingRefsVar)

  const loading = !!loadingRefs.length

  useEffect(() => {
    if (isLoading) addRef(ref)
    else removeRef(ref)

    return () => removeRef(ref)
  }, [isLoading, ref])

  return {loading}
}

export const loadingRefsVar = makeVar([])

export const setRefs = update => void loadingRefsVar(update(loadingRefsVar()))

export const addRef = ref =>
  setRefs(refs => (refs.includes(ref) ? refs : refs.concat(ref)))

export const removeRef = ref => setRefs(refs => refs.filter(e => e !== ref))
