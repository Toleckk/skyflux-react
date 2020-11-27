import React from 'react'
import DatePicker, {ReactDatePickerProps} from 'react-datepicker'
import {Input, InputProps} from '@skyflux/react/ui'
import {StyledContainer} from './styles'

export type DateInputProps = {
  value?: string | Date
  label?: InputProps['label']
} & ReactDatePickerProps

export const DateInput: React.FC<DateInputProps> = ({
  value,
  label,
  ...props
}) => (
  <StyledContainer>
    <DatePicker
      dateFormat="dd.MM.yyyy"
      customInput={<Input label={label} />}
      showYearDropdown
      showMonthDropdown
      selected={value ? new Date(value) : null}
      isClearable
      placeholderText=""
      {...props}
    />
  </StyledContainer>
)
