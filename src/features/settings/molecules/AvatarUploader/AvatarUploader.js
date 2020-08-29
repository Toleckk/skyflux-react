import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {useDropzone} from 'react-dropzone'
import {Avatar, Icon} from '../../../../ui'
import {StyledButton, StyledIconContainer} from './styles'

export const AvatarUploader = ({onFileSelected, loading, value, ...props}) => {
  const {getRootProps, getInputProps, isDragAccept} = useDropzone({
    accept: 'image/*',
    onDropAccepted: onFileSelected,
    multiple: false,
    disabled: loading,
    maxSize: 4194304,
  })

  const [hovered, setHovered] = useState(false)
  const onMouseEnter = useCallback(() => setHovered(true), [setHovered])
  const onMouseLeave = useCallback(() => setHovered(false), [setHovered])

  return (
    <StyledButton
      disabled={loading}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <input readOnly hidden value={value} {...props} />
      <Avatar src={value} />
      {(loading || isDragAccept || hovered) && (
        <StyledIconContainer>
          <Icon icon={loading ? 'uploading' : 'upload'} size="50%" />
        </StyledIconContainer>
      )}
    </StyledButton>
  )
}

AvatarUploader.propTypes = {
  onFileSelected: PropTypes.func,
  loading: PropTypes.bool,
  value: PropTypes.string,
}