import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useHistory, useLocation} from 'react-router'
import {parse, stringify} from 'query-string'
import {H1} from 'ui'
import {useDebouncedEffect} from 'utils'
import {SearchInput} from '../../molecules'
import {SearchLoader} from '../../atoms'

export const Search = ({onInputChange, isLoading, children}) => {
  const {t} = useTranslation('search')

  const history = useHistory()
  const {pathname, search} = useLocation()
  const {q, ...params} = parse(search)

  const delayed = useDebouncedEffect(
    () => {
      onInputChange(q)
    },
    [onInputChange, q],
    1000,
  )

  const onChange = useCallback(
    e =>
      history.replace({
        pathname,
        search: stringify({
          ...params,
          q: e.target.value || null,
        }),
      }),
    [history, params, pathname],
  )

  return (
    <Flex flexDirection="column" minHeight="100vh" paddingTop="2rem">
      <Flex flex={q ? 0 : 1} alignItems="center">
        <SearchInput value={q} onChange={onChange} />
      </Flex>
      {(isLoading || delayed) && !!q && <SearchLoader />}
      {!(isLoading || delayed) && !children && !!q && (
        <Box margin="auto">
          <H1>{t('Nothing found!')}</H1>
        </Box>
      )}
      {!isLoading && !delayed && !!q && children}
    </Flex>
  )
}

Search.propTypes = {
  onInputChange: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
}
