import React from 'react'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router'
import {useMyTitle} from 'features/common/hooks'
import {Post} from '../../organisms'

export const Display = () => {
  const {t} = useTranslation('post')
  useMyTitle(t('Post'))

  const {id} = useParams()

  return <Post _id={id} />
}
