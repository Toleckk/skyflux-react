export const handleMore = (connection, entity, root = '') => {
  if (!entity) return connection

  if (root !== '')
    return {...connection, [root]: handleMore(connection[root], entity)}

  if ('deleted' in entity) return deleteFromConnection(connection, entity)

  if (connection.edges.some(({node}) => node._id === entity._id))
    return replaceInConnection(connection, entity)

  return addToConnection(connection, entity)
}

export const replaceInConnection = (connection, entity) => ({
  ...connection,
  edges: connection.edges.map(edge =>
    edge.node._id === entity._id
      ? {
          cursor: entity._id,
          node: entity,
        }
      : edge,
  ),
})

export const deleteFromConnection = (connection, entity) => ({
  ...connection,
  edges: connection.edges.filter(({node}) => node._id !== entity._id),
})

export const addToConnection = (connection, entity) => ({
  ...connection,
  edges: [{cursor: entity._id, node: entity}].concat(connection.edges),
})
