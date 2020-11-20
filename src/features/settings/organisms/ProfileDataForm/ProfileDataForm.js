import React, {useCallback, useEffect} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import {useMutation} from '@apollo/client'
import * as yup from 'yup'
import {Icon, Input} from 'ui'
import {mergeErrors} from 'utils'
import {
  ABOUT_MAX_LENGTH,
  avatar,
  description,
  FROM_MAX_LENGTH,
} from 'validation'
import {User} from 'models/user'
import {AvatarUploader, DateInput} from '../../molecules'
import {useUploadAvatar} from '../../hooks'
import {UPDATE_PROFILE_INFO} from '../../graphql'
import {StyledInputsContainer, StyledResponsibleContainer} from './styles'

const schema = yup.object().shape({
  avatar,
  description: description.required(),
})

export const ProfileDataForm = ({user}) => {
  const {t} = useTranslation('settings')

  const [update, {error}] = useMutation(UPDATE_PROFILE_INFO)

  const {
    handleSubmit,
    register,
    formState,
    reset,
    control,
    errors: formErrors,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const errors = mergeErrors(error, formErrors)

  const {avatar, upload, loading, reset: resetAvatar, remove} = useUploadAvatar(
    user.avatar,
  )

  const resetForm = useCallback(() => {
    reset()
    resetAvatar()
  }, [reset, resetAvatar])

  useEffect(resetForm, [resetForm, user])

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(variables => update({variables}))}
      onReset={resetForm}
      flexDirection="column"
    >
      <StyledResponsibleContainer>
        <Box width="9rem" height="9rem">
          <AvatarUploader
            name="avatar"
            onFileSelected={upload}
            onDelete={remove}
            loading={loading}
            value={avatar}
            ref={register}
            error={t(errors.avatar)}
          />
        </Box>
        <StyledInputsContainer>
          <Controller
            name="description.birthday"
            defaultValue={user.description.birthday}
            control={control}
            as={
              <DateInput
                label={t('Birthdate')}
                error={t(errors.description?.birthday)}
              />
            }
          />
          <Input
            label={t('From')}
            name="description.from"
            ref={register}
            maxLength={FROM_MAX_LENGTH}
            defaultValue={user.description.from}
            error={t(errors.description?.from)}
          />
        </StyledInputsContainer>
      </StyledResponsibleContainer>
      <Input
        multi
        name="description.about"
        placeholder={t('Tell about yourself')}
        ref={register}
        maxLength={ABOUT_MAX_LENGTH}
        defaultValue={user.description.about}
        error={t(errors.description?.about)}
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
