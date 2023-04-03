import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { FavoriteController, AuthController } from './controllers'

export const store = configureStore({
  reducer: {
    favoriteController: FavoriteController.reducer,
    authController: AuthController.reducer,
  },
  middleware: getDefaultMiddleware =>
    //getDefaultMiddleware({ serializableCheck: false }),
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})
