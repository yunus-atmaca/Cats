import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Constants, Storage } from '@src/utils'

const name = 'appHeader'

export type State = {
  favorites: ICat[]
}

const defState: State = {
  favorites: [],
}

const initialState = defState

const {
  actions: { addCat, removeCat, setCats },
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setCats: (_, action: PayloadAction<ICat[]>) => {
      return { favorites: action.payload }
    },
    addCat: (state, action: PayloadAction<ICat>) => {
      let f: ICat[] = JSON.parse(JSON.stringify(state.favorites)) //clone
      const found = f.some(c => c.id === action.payload.id)
      if (!found) f.push(action.payload)

      Storage.save(Constants.FAVORITE_CATS, JSON.stringify(f))
      return { ...state, favorites: f }
    },
    removeCat: (state, action: PayloadAction<ICat>) => {
      let f: ICat[] = JSON.parse(JSON.stringify(state.favorites)) //clone
      f = f.filter(c => {
        return c.id !== action.payload.id
      })

      Storage.save(Constants.FAVORITE_CATS, JSON.stringify(f))

      return { ...state, favorites: f }
    },
  },
})

export { reducer, addCat, removeCat, setCats }
