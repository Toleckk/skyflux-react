import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Text} from '../Text'

export const Date = ({date, time}) => {
  const dateStr = useMemo(
    window.Date.prototype[time ? 'toLocaleString' : 'toLocaleDateString'].bind(
      date instanceof window.Date ? date : new window.Date(date),
    ),
    [date, time],
  )

  return <Text>{dateStr}</Text>
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
