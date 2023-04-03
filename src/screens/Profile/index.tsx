import React, { FC } from 'react'
import { View } from 'react-native'

import { CreatorScreenProps } from '@src/types/navigation'
import { ScaledSheet } from 'react-native-size-matters'

import { Header } from '@src/components'
import Login from './Login'
import User from './User'
import { useAppSelector } from '@src/types/store'

const Profile: FC<CreatorScreenProps<'Profile'>> = ({}) => {
  const user = useAppSelector(s => s.authController.user)

  return (
    <View style={styles.container}>
      <Header routeName="Profile" />
      {!user ? <Login /> : <User user={user} />}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
