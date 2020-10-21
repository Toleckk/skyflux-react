import React from 'react'
import {useParams} from 'react-router'
import {PostDisplay} from '../../organisms'

export const Display = () => {
  const {id} = useParams()
  return <PostDisplay _id={id} />
}
