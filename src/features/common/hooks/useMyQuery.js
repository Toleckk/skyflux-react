import {useQuery} from '@apollo/client'

export const useMyQuery = ({query, ...options}) => useQuery(query, options)
