import React, { FC, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { getNavContainerRef, AllRoutes } from '@src/types/navigation'
import { Home, Profile } from '@src/screens'

const Stack = createStackNavigator<AllRoutes>()

const RootStackNav: FC = ({}) => {
  const _onStateChange = () => {}

  return (
    <NavigationContainer
      ref={getNavContainerRef()}
      onStateChange={_onStateChange}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Profile'} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackNav
