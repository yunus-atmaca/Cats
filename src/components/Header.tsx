import React, { FC } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_ArrowBack } from '@src/res'
import { getNavContainerRef } from '@src/types/navigation'

type Props = {
  routeName: string
}

const Header: FC<Props> = ({ routeName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.title}
        onPress={() => getNavContainerRef().goBack()}
        activeOpacity={0.6}>
        <Ic_ArrowBack />
        <Text style={styles.text}>{routeName.toUpperCase()}</Text>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'center'
  },
  title: {
    flexDirection: 'row',
    alignItems:'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginStart: '16@ms',
  },
})

export default Header
