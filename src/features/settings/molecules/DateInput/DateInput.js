import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import {Input} from 'ui'
import {StyledContainer} from './styles'

export const DateInput = ({value, label, ...props}) => (
  <StyledContainer>
    <DatePicker
      dateFormat="dd.MM.yyyy"
      customInput={<Input label={label} />}
      showYearDropdown
      showMonthDropdown
      selected={value ? new Date(value) : value}
      isClearable
      placeholderText=""
      {...props}
    />
  </StyledContainer>
)

DateInput.defaultProps = {
  value: null,
  label: Input.defaultProps.label,
}

DateInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  label: PropTypes.string,
}
