import React, {useCallback} from 'react'
import {useTheme} from 'styled-components'
import {Box} from 'reflexbox'
import {dark, light} from 'themes'
import {Icon} from '@skyflux/react/ui'
import {TTheme} from '@skyflux/react/utils'

export const SwitchThemeButton: React.FC = () => {
  const {name, setTheme} = useTheme() as TTheme

  const onClick = useCallback(
    () => setTheme(({name}) => (name === 'dark' ? light : dark)),
    [setTheme],
  )

  const icon = name === 'light' ? 'dark-theme' : 'light-theme'

  const color = `${name === 'light' ? dark.background : light.background}`

  return (
    <Box as="button" height="2rem" width="2rem" onClick={onClick}>
      <Icon icon={icon} color={color} />
    </Box>
  )
}
