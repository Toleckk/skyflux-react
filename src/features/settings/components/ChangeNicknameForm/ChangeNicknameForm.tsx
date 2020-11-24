import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Button, Input} from 'ui'
import {ResponsibleForm} from '../../components'
import {MyProfile_me} from '../../graphql'
import {useChangeNicknameForm} from '../../hooks'

export type ChangeNicknameFormProps = {
  user: MyProfile_me
}

export const ChangeNicknameForm: React.FC<ChangeNicknameFormProps> = ({
  user,
}) => {
  const {t} = useTranslation('settings')

  const {
    submit,
    register,
    errors,
    nicknameUniquenessLoading,
    submitting,
  } = useChangeNicknameForm()

  return (
    <ResponsibleForm onSubmit={submit}>
      <Input
        ref={register}
        name="nickname"
        label={t('New nickname')}
        placeholder={user.nickname}
        error={t(errors.nickname as string)}
        isLoading={nicknameUniquenessLoading}
      />
      <Box marginTop="1rem">
        <Button type="submit" disabled={submitting}>
          {t('Change')}
        </Button>
      </Box>
    </ResponsibleForm>
  )
}
