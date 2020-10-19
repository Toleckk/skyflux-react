import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import {useDropzone} from 'react-dropzone'
import {Avatar, Icon} from 'ui'
import {StyledButton, StyledIconContainer} from './styles'
import useMergedRef from '@react-hook/merged-ref'

export const AvatarUploader = forwardRef(
  ({onFileSelected, loading, value, ...props}, ref) => {
    const onDropAccepted = useCallback(
      files => !loading && onFileSelected(files[0]),
      [onFileSelected, loading],
    )

    const {getRootProps, getInputProps, isDragAccept} = useDropzone({
      accept: 'image/*',
      onDropAccepted,
      multiple: false,
      disabled: loading,
      maxSize: 4194304,
    })

    const [hovered, setHovered] = useState(false)
    const onMouseEnter = useCallback(() => setHovered(true), [setHovered])
    const onMouseLeave = useCallback(() => setHovered(false), [setHovered])

    const inputRef = useRef()

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.dispatchEvent(new Event('change'))
        inputRef.current.dispatchEvent(new Event('blur'))
      }
    }, [value, inputRef])

    const registerRef = useMergedRef(ref, inputRef)

    return (
      <StyledButton
        type="button"
        disabled={loading}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <input
          readOnly
          hidden
          value={value || ''}
          ref={registerRef}
          {...props}
        />
        <Avatar src={value} />
        {(loading || isDragAccept || hovered) && (
          <StyledIconContainer>
            <Icon icon={loading ? 'uploading' : 'upload'} size="50%" />
          </StyledIconContainer>
        )}
      </StyledButton>
    )
  },
)

AvatarUploader.displayName = 'AvatarUploader'

AvatarUploader.propTypes = {
  onFileSelected: PropTypes.func,
  loading: PropTypes.bool,
  value: PropTypes.string,
}
