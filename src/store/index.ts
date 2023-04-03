import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { FavoriteController } from './controllers'

export const store = configureStore({
  reducer: {
    favoriteController: FavoriteController.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
    //getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})
