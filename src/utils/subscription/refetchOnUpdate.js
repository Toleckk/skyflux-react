export const refetchOnUpdate = (prev, __, {refetch}) => {
  refetch()
  return prev
}
