import React, {Suspense, useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useHistory, useLocation} from 'react-router'
import {parse, stringify} from 'query-string'
import {useMyTitle} from 'features/shared/hooks'
import {H1} from 'typography'
import {useDebouncedEffect} from 'utils'
import {SearchInput} from '../../molecules'
import {SearchLoader} from '../../atoms'

export type SearchProps = {
  onInputChange: (query: string) => unknown
  isLoading?: boolean
}

export const Search: React.FC<SearchProps> = ({
  onInputChange,
  isLoading,
  children,
}) => {
  const {t} = useTranslation('search')

  useMyTitle(t('Search'))

  const history = useHistory()
  const {pathname, search} = useLocation()
  const {q, ...params} = parse(search)

  const delayed = useDebouncedEffect(
    () => {
      onInputChange((q as string | null) || '')
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
        <SearchInput value={q || ''} onChange={onChange} />
      </Flex>
      {(isLoading || delayed) && !!q && <SearchLoader />}
      {!(isLoading || delayed) && !children && !!q && (
        <Box margin="auto">
          <H1>{t('Nothing found!')}</H1>
        </Box>
      )}
      <Suspense fallback={<SearchLoader />}>
        {!isLoading && !delayed && !!q && children}
      </Suspense>
    </Flex>
  )
}
