import { setCats } from '@src/store/controllers/favorite'
import { useAppDispatch } from '@src/types/store'
import { Constants, Storage } from '@src/utils'
import { useEffect, useState } from 'react'

export type SESSION_STATUS = 'FAILED' | 'LOADING' | 'LOADED'
export const useSession = () => {
  const dispatch = useAppDispatch()
  const [session, setSession] = useState<SESSION_STATUS>('LOADING')

  useEffect(() => {
    loadInitialApp()
  }, [])

  const loadInitialApp = async () => {
    const f = await Storage.load(Constants.FAVORITE_CATS)
    if (f) {
      const parsed = JSON.parse(f)
      dispatch(setCats(parsed))
    }

    setTimeout(() => {
      setSession('LOADED')
    }, 750)
  }

  return session
}
