import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation-locker'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { useSession } from '@src/hooks/app'
import RootStackNav from '@src/navigation/RootStackNav'
import { store } from '@src/store'

const App = () => {
  const session = useSession()

  useEffect(() => {
    Orientation.lockToPortrait()

    if (session === 'LOADING') {
    } else if (session === 'LOADED') {
      SplashScreen.hide()
    } else if (session === 'FAILED') {
    }
  }, [session])

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <RootStackNav />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
