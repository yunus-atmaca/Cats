import { useEffect, useState } from 'react'

import { client, EndPoints } from '@src/utils/client'

export type HOOK_STATE = {
  loading: boolean
  error: boolean
  items: ICatCategory[]
}

export const defaultState: HOOK_STATE = {
  loading: true,
  error: false,
  items: [],
}

const useCategories = (refresh: number = 0) => {
  const [state, setState] = useState<HOOK_STATE>(defaultState)

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    if (refresh > 0) {
      setState(defaultState)
      getCategories()
    }
  }, [refresh])

  const getCategories = async () => {
    const res = await client.get(EndPoints.categories)

    console.debug('status -> ', res.status)
    console.debug(res.data)

    if (res.status === 200) {
      //success
      setState({ loading: false, error: false, items: res.data })
    } else {
      //fail
      setState({ loading: false, error: true, items: res.data })
    }
  }

  return state
}

export { useCategories }
