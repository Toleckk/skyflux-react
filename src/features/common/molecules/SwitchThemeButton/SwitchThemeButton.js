import React, {useCallback} from 'react'
import {useTheme} from 'styled-components'
import {dark, light} from 'themes'
import {Icon} from 'ui'
import {Box} from 'reflexbox'

export const SwitchThemeButton = () => {
  const {name, setTheme} = useTheme()

  const onClick = useCallback(
    () => setTheme(({name}) => (name === 'dark' ? light : dark)),
    [setTheme],
  )

  const icon = (name === 'light' ? 'dark' : 'light') + '-theme'
  const color = `rgb(${
    name === 'light' ? dark.primaryDark : light.primaryDark
  })`

  return (
    <Box as="button" height="2rem" width="2rem" onClick={onClick}>
      <Icon icon={icon} color={color} />
    </Box>
  )
}
