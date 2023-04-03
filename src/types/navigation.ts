import type { StackScreenProps } from '@react-navigation/stack'
import type { NavigationProp } from '@react-navigation/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type AllRoutes = {
  Home: undefined
  Profile: undefined
  Details: undefined
}

export type RouteProp = NavigationProp<AllRoutes>
export type CreatorScreenProps<K extends keyof AllRoutes> = StackScreenProps<
  AllRoutes,
  K
>

const _navReference = createNavigationContainerRef<AllRoutes>()
export const getNavContainerRef =
  (): NavigationContainerRefWithCurrent<AllRoutes> => {
    return _navReference
  }
