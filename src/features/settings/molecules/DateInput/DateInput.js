import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import {useTranslation} from 'react-i18next'
import {Input} from '../../../../ui'
import {StyledContainer} from './styles'

export const DateInput = ({value, label, ...props}) => {
  const {t} = useTranslation('settings')

  return (
    <StyledContainer>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        customInput={<Input label={label} />}
        showYearDropdown
        showMonthDropdown
        isClearable
        placeholderText={t('Date')}
        selected={value}
        {...props}
      />
    </StyledContainer>
  )
}

DateInput.defaultProps = {
  value: null,
  label: Input.defaultProps.label,
}

DateInput.propTypes = {
  value: PropTypes.string,
  label: Input.propTypes.label,
}
