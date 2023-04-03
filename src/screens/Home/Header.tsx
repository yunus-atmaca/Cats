import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_Profile } from '@src/res/'
import { getNavContainerRef } from '@src/types/navigation'

type Props = {}

const Header: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => getNavContainerRef().navigate('Profile')}
        activeOpacity={0.6}>
        <Ic_Profile />
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@ms',
    paddingHorizontal: '16@ms',
    backgroundColor: 'white',
    shadowColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default Header
