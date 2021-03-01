import 'styled-components'

declare module 'styled-components' {
  export type Theme = 'dark' | 'light'

  export interface DefaultTheme {
    readonly name: Theme

    readonly landingBackground: string

    readonly primary: string
    readonly secondary: string

    readonly text1: string
    readonly text2: string

    readonly error1: string
    readonly error2: string

    readonly background: string
  }
}
