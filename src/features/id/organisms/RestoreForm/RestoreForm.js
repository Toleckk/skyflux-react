import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Input} from '../../../../ui'
import {FieldDescription, SubmitButton} from '../../atoms'

export const RestoreForm = withTranslation('id')(({t}) => (
  <Flex flexDirection="column" alignItems="center">
    <FieldDescription>{t('Enter nickname or email')}</FieldDescription>
    <Box marginTop="1em">
      <form>
        <Input label={t('Login')} id={'login'} name={'login'} />
        <Flex marginTop="1.5em" justifyContent="center">
          <SubmitButton>{t('Next')}</SubmitButton>
        </Flex>
      </form>
    </Box>
  </Flex>
))
