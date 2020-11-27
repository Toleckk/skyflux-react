import styled from 'styled-components'
import {Button} from '@skyflux/react/ui'

export const SubmitButton = styled(Button).attrs(() => ({type: 'submit'}))`
  border-radius: 10px;
  padding: 10px 12px;

  width: 9rem;
  text-align: center;
`
