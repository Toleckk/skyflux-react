import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {SearchInput} from '../../molecules'
import {H1} from '../../../../ui'
import {SearchLoader} from '../../atoms'

export const Search = ({onInputChange, isLoading, children}) => {
  const {t} = useTranslation('search')
  const [text, setText] = useState('')

  const onChange = useCallback(
    e => {
      setText(e.target.value)
      return onInputChange?.(e)
    },
    [setText, onInputChange],
  )

  return (
    <Flex flexDirection="column" minHeight="100vh" paddingTop="2rem">
      <Flex flex={text ? 0 : 1} alignItems="center">
        <SearchInput value={text} onChange={onChange} />
      </Flex>
      {isLoading && !!text && <SearchLoader />}
      {!isLoading && !children && !!text && (
        <Box margin="auto">
          <H1>{t('Nothing found!')}</H1>
        </Box>
      )}
      {!isLoading && !!text && children}
    </Flex>
  )
}

Search.propTypes = {
  onInputChange: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
}
