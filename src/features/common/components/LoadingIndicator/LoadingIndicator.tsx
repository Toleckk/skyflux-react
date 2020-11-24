import React from 'react'
import {Loader} from 'ui'
import {useLoader} from 'features/shared/hooks'
import {StyledContainer, StyledLoaderContainer} from './styles'

export const LoadingIndicator: React.FC = () => {
  const loading = useLoader()

  return (
    <StyledContainer>
      {loading && (
        <StyledLoaderContainer>
          <Loader size="2.5rem" hasShadow={false} borderWidth="5px" />
        </StyledLoaderContainer>
      )}
    </StyledContainer>
  )
}
