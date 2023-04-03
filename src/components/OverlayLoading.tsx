import React, { FC } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {}

const OverlayLoading: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(128,128,128, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default OverlayLoading
