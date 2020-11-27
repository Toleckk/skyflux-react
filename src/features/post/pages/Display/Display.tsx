import React from 'react'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router'
import {useMyTitle} from '@skyflux/react/features/shared/hooks'
import {Post} from '../../components'

export const Display: React.FC = () => {
  const {t} = useTranslation('post')
  useMyTitle(t('Post'))

  const {id} = useParams<{id: string}>()

  return <Post _id={id} />
}
