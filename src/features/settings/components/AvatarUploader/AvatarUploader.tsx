import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {useDropzone} from 'react-dropzone'
import {Box} from 'reflexbox/styled-components'
import useMergedRef from '@react-hook/merged-ref'
import {Avatar, Icon} from 'ui'
import {
  StyledContainer,
  StyledDeleteButton,
  StyledIconContainer,
} from './styles'

export type AvatarUploaderProps = {
  onFileSelected: (file: Blob) => unknown
  onDelete?: () => unknown
  loading?: boolean
  value?: string | null
} & Omit<JSX.IntrinsicElements['input'], 'value'>

export const AvatarUploader = forwardRef<HTMLInputElement, AvatarUploaderProps>(
  ({onFileSelected, onDelete, loading, value, ...props}, ref) => {
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

    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.dispatchEvent(new Event('change'))
        inputRef.current.dispatchEvent(new Event('blur'))
      }
    }, [value, inputRef])

    const registerRef = useMergedRef(ref, inputRef)

    return (
      <StyledContainer>
        <Box
          as="button"
          {...{type: 'button', disabled: loading}}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          height="100%"
          width="100%"
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
        </Box>
        {!!value && (
          <StyledDeleteButton onClick={onDelete}>
            <Icon icon="delete" size="1rem" />
          </StyledDeleteButton>
        )}
      </StyledContainer>
    )
  },
)

AvatarUploader.displayName = 'AvatarUploader'
