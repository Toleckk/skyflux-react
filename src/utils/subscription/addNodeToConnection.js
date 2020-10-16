export const addNodeToConnection = (node, connection) => ({
  ...connection,
  edges: [
    ...(!node || connection.edges.some(({cursor}) => cursor === node._id)
      ? []
      : [{cursor: node._id, node}]),
    ...connection.edges,
  ],
})
