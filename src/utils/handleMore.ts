export type Entity = {
  _id: string
}

export type Connection<E extends Entity> = {
  edges: {
    node: E
    cursor: string
  }[]
}

export const handleMore = <E extends Entity, C extends Connection<E>>(
  connection: C,
  entity: E,
): C => {
  if (!entity) return connection

  if ('deleted' in entity) return deleteFromConnection(connection, entity)

  if (connection.edges.some(({node}) => node._id === entity._id))
    return replaceInConnection(connection, entity)

  return addToConnection(connection, entity)
}

export const replaceInConnection = <E extends Entity, C extends Connection<E>>(
  connection: C,
  entity: E,
): C => ({
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

export const deleteFromConnection = <E extends Entity, C extends Connection<E>>(
  connection: C,
  entity: E,
): C => ({
  ...connection,
  edges: connection.edges.filter(({node}) => node._id !== entity._id),
})

export const addToConnection = <E extends Entity, C extends Connection<E>>(
  connection: C,
  entity: E,
): C => ({
  ...connection,
  edges: [{cursor: entity._id, node: entity}].concat(connection.edges),
})
