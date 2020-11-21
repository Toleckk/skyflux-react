import React, {useEffect, useMemo, useState} from 'react'
import {areObjectsSameShape} from 'deep-shape-equals'
import {ThemeProvider} from 'styled-components'
import {Theme as ThemeObjectType} from 'themes'
import {dark} from '../themes'

export type TTheme = ThemeObjectType & {
  setTheme: React.Dispatch<React.SetStateAction<ThemeObjectType>>
}

export const Theme: React.FC = ({children}) => {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => saveTheme(theme), [theme])

  const value: TTheme = useMemo(() => ({...theme, setTheme}), [theme, setTheme])

  return <ThemeProvider theme={value}>{children}</ThemeProvider>
}

export const saveTheme = (theme: Record<string, unknown>): void =>
  localStorage.setItem(
    'theme',
    JSON.stringify(areObjectsSameShape([theme, dark]) ? theme : dark),
  )

export const getTheme = (): ThemeObjectType => {
  const saved = localStorage.getItem('theme')

  if (!saved) return dark

  try {
    const theme = JSON.parse(saved)

    return areObjectsSameShape([theme, dark]) ? theme : dark
  } catch {
    return dark
  }
}
