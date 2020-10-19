import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Input} from 'ui'
import {updateProfileInfo, User} from 'models/user'
import {useMyMutation} from 'features/common/hooks'
import {AvatarUploader, DateInput} from '../../molecules'
import {useUploadAvatar} from '../../hooks'

const schema = yup.object().shape({
  avatar: yup.string().url(),
  description: yup
    .object()
    .shape({
      birthday: yup.string(),
      from: yup.string().max(36),
      about: yup.string().max(120),
    })
    .required(),
})

export const ProfileDataForm = ({user}) => {
  const {t} = useTranslation('settings')

  const [update] = useMyMutation(updateProfileInfo())

  const {handleSubmit, register, control} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const {avatar = user.avatar, upload, loading} = useUploadAvatar()

  const onSubmit = useCallback(handleSubmit(update), [handleSubmit])

  return (
    <Box as="form" onSubmit={onSubmit}>
      <Flex justifyContent="space-between" marginBottom="1rem">
        <Box width="9rem" height="9rem">
          <AvatarUploader
            name="avatar"
            onFileSelected={upload}
            loading={loading}
            value={avatar}
            ref={register}
          />
        </Box>
        <Box width="50%">
          <Controller
            name="description.birthday"
            defaultValue={user.description.birthday}
            control={control}
            as={<DateInput label={t('Birthdate')} />}
          />
          <Input
            label={t('From')}
            name="description.from"
            ref={register}
            defaultValue={user.description.from}
          />
        </Box>
      </Flex>
      <Input
        multi
        name="description.about"
        ref={register}
        defaultValue={user.description.about}
      />
    </Box>
  )
}

ProfileDataForm.propTypes = {
  user: User.isRequired,
}
