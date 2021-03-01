import React, {useEffect, useMemo, useState} from 'react'
import {ThemeProvider} from 'styled-components'
import * as Themes from '@skyflux/react/themes'

export const Theme: React.FC = ({children}) => {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => saveTheme(theme), [theme])

  const value = useMemo(() => ({...Themes[theme], setTheme}), [theme, setTheme])

  return <ThemeProvider theme={value}>{children}</ThemeProvider>
}

export const saveTheme = (theme: keyof typeof Themes): void =>
  localStorage.setItem('theme', theme)

export const getTheme = (): keyof typeof Themes => {
  const saved = localStorage.getItem('theme')

  if (isTheme(saved)) {
    return saved
  }

  return 'dark'
}

export const isTheme = (value: unknown): value is keyof typeof Themes =>
  typeof value === 'string' && Object.keys(Themes).includes(value)
