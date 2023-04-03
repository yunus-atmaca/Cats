import { useEffect, useState } from 'react'

export type SESSION_STATUS = 'FAILED' | 'LOADING' | 'LOADED'
export const useSession = () => {
  const [session, setSession] = useState<SESSION_STATUS>('LOADING')

  useEffect(() => {
    loadInitialApp()
  }, [])

  const loadInitialApp = async () => {
    setTimeout(() => {
      setSession('LOADED')
    }, 1500)
  }

  return session
}
