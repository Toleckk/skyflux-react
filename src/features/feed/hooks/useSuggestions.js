import {useQuery} from '@apollo/client'
import {GET_SUGGESTIONS} from '../../../models/user'

export const useSuggestions = skip => {
  const {data, loading} = useQuery(GET_SUGGESTIONS, {
    skip,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  return {users: data?.getSuggestions, loading}
}
