import { setUser } from '@src/store/controllers/auth'
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
    if (f) dispatch(setCats(JSON.parse(f)))

    const u = await Storage.load(Constants.USER_KEY)
    if (u) dispatch(setUser(JSON.parse(u)))

    setTimeout(() => {
      setSession('LOADED')
    }, 500)
  }

  return session
}
