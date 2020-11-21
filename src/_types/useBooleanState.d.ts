declare module 'use-boolean-state' {
  export const useBooleanState: (
    initialState: boolean,
  ) => [boolean, () => void, () => void, () => void, (state: boolean) => void]

  // eslint-disable-next-line import/no-default-export
  export default useBooleanState
}
