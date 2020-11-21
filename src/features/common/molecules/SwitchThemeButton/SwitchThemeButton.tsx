import React, {useCallback} from 'react'
import {useTheme} from 'styled-components'
import {Box} from 'reflexbox'
import {dark, light} from 'themes'
import {Icon} from 'ui'
import {TTheme} from 'utils'

export const SwitchThemeButton: React.FC = () => {
  const {name, setTheme} = useTheme() as TTheme

  const onClick = useCallback(
    () => setTheme(({name}) => (name === 'dark' ? light : dark)),
    [setTheme],
  )

  const icon = name === 'light' ? 'dark-theme' : 'light-theme'

  const color = `rgb(${
    name === 'light' ? dark.primaryDark : light.primaryDark
  })`

  return (
    <Box as="button" height="2rem" width="2rem" onClick={onClick}>
      <Icon icon={icon} color={color} />
    </Box>
  )
}
