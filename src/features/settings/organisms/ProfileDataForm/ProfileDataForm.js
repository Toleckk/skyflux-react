import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {AvatarUploader, DateInput} from '../../molecules'
import {Input} from '../../../../ui'

const schema = yup.object().shape({
  avatar: yup.string().url().required(),
  description: yup
    .object()
    .shape({
      birthday: yup.date(),
      from: yup.string().max(36),
      about: yup.string().max(120),
    })
    .required(),
})

export const ProfileDataForm = ({user}) => {
  const {t} = useTranslation('settings')

  const {handleSubmit, register} = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(handleSubmit(console.log), [handleSubmit])

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
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.shape({
      about: PropTypes.string,
      birthday: PropTypes.string,
      from: PropTypes.string,
    }).isRequired,
  }).isRequired,
}