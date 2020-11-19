import {useMedia} from 'react-use'

export const useMediaScreens = () => {
  const isTablet = useMedia('(min-width: 768px)')
  const isDesktop = useMedia('(min-width: 1280px)')
  const isWide = useMedia('(min-width: 1366px)')

  return {isTablet, isDesktop, isWide}
}
