import React, {useCallback, useEffect, useMemo} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {Icon, Input} from 'ui'
import {avatar, description} from 'validation'
import {updateProfileInfo, User} from 'models/user'
import {useMyMutation} from 'features/common/hooks'
import {AvatarUploader, DateInput} from '../../molecules'
import {useUploadAvatar} from '../../hooks'
import {StyledInputsContainer, StyledResponsibleContainer} from './styles'

const schema = yup.object().shape({
  avatar,
  description: description.required(),
})

export const ProfileDataForm = ({user}) => {
  const {t} = useTranslation('settings')

  const [update] = useMyMutation(updateProfileInfo())

  const {handleSubmit, register, formState, reset, control} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const {
    avatar = user.avatar,
    upload,
    loading,
    reset: resetAvatar,
  } = useUploadAvatar()

  const resetForm = useCallback(() => {
    reset()
    resetAvatar()
  }, [reset, resetAvatar])

  useEffect(resetForm, [resetForm, user])

  const onSubmit = useMemo(() => handleSubmit(update), [handleSubmit, update])

  return (
    <Flex
      as="form"
      onSubmit={onSubmit}
      onReset={resetForm}
      flexDirection="column"
    >
      <StyledResponsibleContainer>
        <Box width="9rem" height="9rem">
          <AvatarUploader
            name="avatar"
            onFileSelected={upload}
            loading={loading}
            value={avatar}
            ref={register}
          />
        </Box>
        <StyledInputsContainer>
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
        </StyledInputsContainer>
      </StyledResponsibleContainer>
      <Input
        multi
        name="description.about"
        placeholder={t('Tell about yourself')}
        ref={register}
        defaultValue={user.description.about}
      />
      {formState.isDirty && (
        <Flex float="right" alignSelf="flex-end" marginTop="1rem">
          <Box as="button" type="reset">
            <Icon icon="reset" size="2rem" />
          </Box>
          <Box as="button" type="submit" marginLeft="1rem">
            <Icon icon="confirm" size="2rem" />
          </Box>
        </Flex>
      )}
    </Flex>
  )
}

ProfileDataForm.propTypes = {
  user: User.isRequired,
}
