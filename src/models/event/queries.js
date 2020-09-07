import {GET_EVENTS} from './schemas'

export const getEvents = (variables = {}) => ({
  query: GET_EVENTS,
  variables,
})
