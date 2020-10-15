export const deleteNodeFromConnection = (node, connection) => ({
  ...connection,
  edges: connection.edges.filter(edge => !node || edge.node._id !== node._id),
})
