import React, { FC } from 'react'
import { View } from 'react-native'

import { CreatorScreenProps } from '@src/types/navigation'
import { ScaledSheet } from 'react-native-size-matters'

const Profile: FC<CreatorScreenProps<'Profile'>> = ({}) => {
  return <View style={styles.container}></View>
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
})

export default Profile
