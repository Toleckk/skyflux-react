import '@apollo/client'

declare module '@apollo/client' {
  export class ApolloClient {
    resetConnection: () => void
    resetPersist: () => void
  }
}
