import React, {useEffect, useMemo, useState} from 'react'
import {areObjectsSameShape} from 'deep-shape-equals'
import {DefaultTheme, ThemeProvider} from 'styled-components'
import {dark} from '@skyflux/react/themes'

export type TTheme = DefaultTheme & {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>
}

export const Theme: React.FC = ({children}) => {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => saveTheme(theme), [theme])

  const value: TTheme = useMemo(() => ({...theme, setTheme}), [theme, setTheme])

  return <ThemeProvider theme={value}>{children}</ThemeProvider>
}

export const saveTheme = (theme: DefaultTheme): void =>
  localStorage.setItem(
    'theme',
    JSON.stringify(areObjectsSameShape([theme, dark]) ? theme : dark),
  )

export const getTheme = (): DefaultTheme => {
  const saved = localStorage.getItem('theme')

  if (!saved) return dark

  try {
    const theme = JSON.parse(saved)

    return areObjectsSameShape([theme, dark]) ? theme : dark
  } catch {
    return dark
  }
}
