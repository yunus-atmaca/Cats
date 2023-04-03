import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const name = 'appHeader'

export type State = {
  user?: IUser
}

const defState: State = {
  user: undefined,
}

const initialState = defState

const {
  actions: { setUser },
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setUser: (_, action: PayloadAction<IUser>) => {
      return { user: action.payload }
    },
  },
})

export { reducer, setUser }
