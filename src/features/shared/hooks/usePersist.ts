import {useEffect, useRef} from 'react'
import {DocumentNode, useApolloClient, useQuery} from '@apollo/client'

export const usePersist = (query: DocumentNode): void => {
  const def = query.definitions.find(({kind}) => kind === 'OperationDefinition')
  const name = def && 'name' in def && def.name?.value

  const isLocalStorageReadRef = useRef(false)
  const client = useApolloClient()

  const {data} = useQuery(query, {fetchPolicy: 'cache-only'})

  if (!isLocalStorageReadRef.current && name && !data?.[name]) {
    isLocalStorageReadRef.current = true
    const json = localStorage.getItem('PERSIST_' + name)
    const data = json && JSON.parse(json)
    if (data) client.writeQuery({query, data})
  }

  useEffect(() => {
    if (data && name && data[name])
      localStorage.setItem('PERSIST_' + name, JSON.stringify(data))
  }, [data, name])
}
