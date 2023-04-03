import { useEffect, useState } from 'react'

import { client, EndPoints } from '@src/utils/client'

export type HOOK_STATE = {
  loading: boolean
  error: boolean
  items: any
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

    return () => {
      setState(defaultState)
    }
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

const useCats = (id: number, page: number) => {
  const [state, setState] = useState<HOOK_STATE>(defaultState)

  useEffect(() => {
    getCats(page)
  }, [page])

  const getCats = async (page: number) => {
    const res = await client.get(
      EndPoints.searchImages +
        `page=${page}order=ASC&limit=25&mime_types=png&category_ids=${id}`,
    )

    if (res.status === 200) {
      setState({ loading: false, error: false, items: res.data })
    } else {
      setState({ loading: false, error: true, items: [] })
    }
  }

  return state
}

export { useCategories, useCats }
