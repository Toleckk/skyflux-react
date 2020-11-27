import {FC, useCallback} from 'react'
import {FetchResult, useMutation} from '@apollo/client'
import {
  AppliedConfirmDialogProps,
  useConfirmDialog,
} from '@skyflux/react/features/shared/hooks'
import {
  MAKE_ACCOUNT_PRIVATE,
  MAKE_ACCOUNT_PUBLIC,
  MakeAccountPrivate,
  MakeAccountPublic,
  MyProfile_me,
} from '../graphql'

export type UseTogglePrivateResult = {
  togglePrivate: () => Promise<
    FetchResult<MakeAccountPublic | MakeAccountPrivate>
  >
  loading: boolean
  ConfirmMakePublicModal: FC<AppliedConfirmDialogProps>
}

export const useTogglePrivate = (
  user: MyProfile_me,
): UseTogglePrivateResult => {
  const [makePublic, publicState] = useMutation(MAKE_ACCOUNT_PUBLIC)
  const [makePrivate, privateState] = useMutation(MAKE_ACCOUNT_PRIVATE)

  const [makePublicWithConfirmation, Modal] = useConfirmDialog(makePublic)

  const togglePrivate = useCallback(
    () => (!user.private ? makePrivate() : makePublicWithConfirmation()),
    [makePrivate, makePublicWithConfirmation, user],
  )

  return {
    togglePrivate,
    loading: publicState.loading || privateState.loading,
    ConfirmMakePublicModal: Modal,
  }
}
