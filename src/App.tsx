import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation-locker'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { useSession } from '@src/hooks/app'
import RootStackNav from '@src/navigation/RootStackNav'
import { store } from '@src/store'

const Root = () => {
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <RootStackNav />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App
