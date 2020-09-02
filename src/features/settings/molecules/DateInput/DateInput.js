import React, {forwardRef, useState} from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import {Input} from 'ui'
import {StyledContainer} from './styles'

export const DateInput = forwardRef(({value, label, ...props}, ref) => {
  const [date, setDate] = useState(new Date(value))

  return (
    <StyledContainer>
      <input hidden readOnly value={date} ref={ref} {...props} />
      <DatePicker
        dateFormat="dd.MM.yyyy"
        customInput={<Input label={label} />}
        showYearDropdown
        showMonthDropdown
        selected={date}
        onChange={setDate}
        isClearable
        placeholderText=""
      />
    </StyledContainer>
  )
})

DateInput.displayName = 'DateInput'

DateInput.defaultProps = {
  value: null,
  label: Input.defaultProps.label,
}

DateInput.propTypes = {
  value: PropTypes.string,
  label: Input.propTypes.label,
}
