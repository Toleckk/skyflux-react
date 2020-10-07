import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Input} from 'ui'
import {updateProfileInfo, User} from 'models/user'
import {useMyMutation} from 'features/common/hooks'
import {AvatarUploader, DateInput} from '../../molecules'

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

  const {handleSubmit, register} = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(update), [handleSubmit])

  return (
    <Box as="form" onSubmit={onSubmit}>
      <Flex justifyContent="space-between" marginBottom="1rem">
        <Box width="9rem" height="9rem">
          <AvatarUploader name="avatar" value={user.avatar} ref={register} />
        </Box>
        <Box width="50%">
          <DateInput
            label={t('Birthdate')}
            name="description.birthday"
            value={user.description.birthday}
            ref={register}
          />
          <Input label={t('From')} name="description.from" ref={register} />
        </Box>
      </Flex>
      <Input multi name="description.about" ref={register} />
    </Box>
  )
}

ProfileDataForm.propTypes = {
  user: User.isRequired,
}
