import {useTitle} from 'react-use'

export const useMyTitle = title =>
  useTitle(`${title} | ${process.env.REACT_APP_NAME}`)
