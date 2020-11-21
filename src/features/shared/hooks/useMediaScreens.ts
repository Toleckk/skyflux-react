import {useMedia} from 'react-use'

export type UseMediaScreensResult = {
  isTablet: boolean
  isDesktop: boolean
  isWide: boolean
}

export const useMediaScreens = (): UseMediaScreensResult => {
  const isTablet = useMedia('(min-width: 768px)')
  const isDesktop = useMedia('(min-width: 1280px)')
  const isWide = useMedia('(min-width: 1366px)')

  return {isTablet, isDesktop, isWide}
}
