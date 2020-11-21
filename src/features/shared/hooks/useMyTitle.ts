import {useTitle} from 'react-use'

export const useMyTitle = (title: string): void =>
  useTitle(`${title} | ${process.env.REACT_APP_NAME}`)
