import React from 'react'
import {getSuggestions} from 'models/user'
import {Loader} from 'ui'
import {useMyQuery} from 'features/common/hooks'
import {UserList} from 'features/common/molecules'

export const SuggestionsDisplay = () => {
  const {data, loading} = useMyQuery(getSuggestions())

  const suggestions = data?.getSuggestions?.edges

  return loading ? <Loader /> : <UserList users={suggestions} />
}
