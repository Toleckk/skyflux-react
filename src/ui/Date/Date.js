import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Tip} from '../Tip'

export const Date = ({date, time}) => {
  const dateStr = useMemo(
    window.Date.prototype[time ? 'toLocaleString' : 'toLocaleDateString'].bind(
      date instanceof window.Date ? date : new window.Date(date),
    ),
    [date, time],
  )

  return <Tip>{dateStr}</Tip>
}

Date.defaultProps = {
  time: true,
}

Date.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(window.Date),
  ]).isRequired,
  time: PropTypes.bool,
}
