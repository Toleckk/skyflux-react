import React, {ErrorInfo, ReactNode} from 'react'
import {Translation} from 'react-i18next'
import {ThemeContext} from 'styled-components'
import {Flex} from 'reflexbox/styled-components'
import {H1} from '@skyflux/react/typography'

export class ErrorBoundary extends React.PureComponent {
  static contextType = ThemeContext

  state = {
    error: false,
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({error: true})
  }

  render(): ReactNode {
    if (this.state.error)
      return (
        <Translation ns="nav">
          {t => (
            <Flex
              height="100vh"
              width="100%"
              alignItems="center"
              justifyContent="center"
              style={{
                backgroundColor: `${this.context.primaryDark}`,
              }}
            >
              <H1>{t('Something went wrong')}</H1>
            </Flex>
          )}
        </Translation>
      )

    return this.props.children
  }
}
