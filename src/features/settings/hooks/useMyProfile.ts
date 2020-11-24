import {useQuery} from '@apollo/client'
import {MY_PROFILE, MyProfile_me} from '../graphql'

export type UseMyProfileResult = {
  user?: MyProfile_me | null
  loading: boolean
}

export const useMyProfile = (): UseMyProfileResult => {
  const {data, loading} = useQuery(MY_PROFILE)
  const me = data?.me

  return {
    user: me,
    loading,
  }
}
