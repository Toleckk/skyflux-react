export const addNodeToConnection = node => connection => ({
  ...connection,
  edges: [{cursor: node._id, node}, ...connection.edges],
})
