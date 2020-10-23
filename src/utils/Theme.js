import React, {useEffect, useMemo, useState} from 'react'
import {areObjectsSameShape} from 'deep-shape-equals'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'
import {dark} from '../themes'

export const Theme = ({children}) => {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => saveTheme(theme), [theme])

  const value = useMemo(() => ({...theme, setTheme}), [theme, setTheme])

  return <ThemeProvider theme={value}>{children}</ThemeProvider>
}

Theme.propTypes = {
  children: PropTypes.node,
}

export const saveTheme = theme =>
  localStorage.setItem(
    'theme',
    JSON.stringify(areObjectsSameShape([theme, dark]) ? theme : dark),
  )

export const getTheme = () => {
  const saved = localStorage.getItem('theme')

  if (!saved) return dark

  try {
    const theme = JSON.parse(saved)

    return areObjectsSameShape([theme, dark]) ? theme : dark
  } catch {
    return dark
  }
}
