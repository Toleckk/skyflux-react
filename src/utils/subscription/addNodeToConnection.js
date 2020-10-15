export const addNodeToConnection = (node, connection) => ({
  ...connection,
  edges: [
    ...(connection.edges.some(({cursor}) => cursor === node._id)
      ? []
      : [{cursor: node._id, node}]),
    ...connection.edges,
  ],
})
