import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {}

const Header: FC<Props> = ({}) => {
  return <View style={styles.container}></View>
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@ms',
    backgroundColor: 'white',
    shadowColor: 'black',
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
