import React, {ErrorInfo, ReactNode} from 'react'
import PropTypes from 'prop-types'
import {Translation} from 'react-i18next'
import {ThemeContext} from 'styled-components'
import {Flex} from 'reflexbox/styled-components'
import {H1} from 'typography'

export class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

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
                backgroundColor: `rgb(${this.context.primaryDark})`,
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
