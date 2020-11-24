import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {Controller} from 'react-hook-form'
import {Icon, Input} from 'ui'
import {ABOUT_MAX_LENGTH, FROM_MAX_LENGTH} from 'validation'
import {AvatarUploader, DateInput} from '../../components'
import {useProfileDataForm} from '../../hooks'
import {MyProfile_me} from '../../graphql'
import {StyledInputsContainer, StyledResponsibleContainer} from './styles'

export type ProfileDataFormProps = {
  user: MyProfile_me
}

export const ProfileDataForm: React.FC<ProfileDataFormProps> = ({user}) => {
  const {t} = useTranslation('settings')

  const {
    submit,
    formState,
    reset,
    register,
    control,
    uploadAvatar,
    removeAvatar,
    avatarUploading,
    avatar,
    errors,
  } = useProfileDataForm(user)

  return (
    <Flex
      as="form"
      onSubmit={submit}
      {...{onReset: reset as any}}
      flexDirection="column"
    >
      <StyledResponsibleContainer>
        <Box width="9rem" height="9rem">
          <AvatarUploader
            name="avatar"
            onFileSelected={uploadAvatar}
            onDelete={removeAvatar}
            loading={avatarUploading}
            value={avatar}
            ref={register}
          />
        </Box>
        <StyledInputsContainer>
          <Controller
            name="description.birthday"
            defaultValue={user.description.birthday}
            control={control}
            render={({ref, ...props}) => (
              <DateInput label={t('Birthdate')} {...props} />
            )}
          />
          <Input
            label={t('From')}
            name="description.from"
            ref={register}
            maxLength={FROM_MAX_LENGTH}
            defaultValue={user.description.from || undefined}
            error={t((errors.description as any)?.from)}
          />
        </StyledInputsContainer>
      </StyledResponsibleContainer>
      <Input
        multi
        name="description.about"
        placeholder={t('Tell about yourself')}
        ref={register}
        maxLength={ABOUT_MAX_LENGTH}
        defaultValue={user.description.about || undefined}
        error={t((errors.description as any)?.about)}
      />
      {formState.isDirty && (
        <Flex {...{float: 'right'}} alignSelf="flex-end" marginTop="1rem">
          <Box as="button" {...{type: 'reset'}}>
            <Icon icon="reset" size="2rem" />
          </Box>
          <Box as="button" {...{type: 'submit'}} marginLeft="1rem">
            <Icon icon="confirm" size="2rem" />
          </Box>
        </Flex>
      )}
    </Flex>
  )
}
