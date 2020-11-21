import {useQuery} from '@apollo/client'
import {SUGGESTIONS} from '../graphql'
import {Suggestions_suggestions} from '../graphql/types/Suggestions'

export type UseSuggestionsResult = {
  users?: Suggestions_suggestions
  loading: boolean
}

export const useSuggestions = (skip?: boolean): UseSuggestionsResult => {
  const {data, loading} = useQuery(SUGGESTIONS, {
    skip,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  return {users: data?.suggestions, loading}
}
