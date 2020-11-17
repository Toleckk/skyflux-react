import {useEffect, useRef} from 'react'
import {useApolloClient, useQuery} from '@apollo/client'

export const usePersist = query => {
  const name = query.definitions.find(
    ({kind}) => kind === 'OperationDefinition',
  )?.name?.value
  const isLocalStorageReadRef = useRef(false)
  const client = useApolloClient()

  const {data} = useQuery(query, {fetchPolicy: 'cache-only'})

  if (!isLocalStorageReadRef.current && !data?.[name]) {
    isLocalStorageReadRef.current = true
    const json = localStorage.getItem('PERSIST_' + name)
    const data = json && JSON.parse(json)
    if (data) client.writeQuery({query, data})
  }

  useEffect(() => {
    if (data && data[name])
      localStorage.setItem('PERSIST_' + name, JSON.stringify(data))
  }, [data, name])
}
