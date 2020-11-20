import {useQuery} from '@apollo/client'
import {SUGGESTIONS} from '../graphql'

export const useSuggestions = skip => {
  const {data, loading} = useQuery(SUGGESTIONS, {
    skip,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  return {users: data?.suggestions, loading}
}
