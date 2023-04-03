import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_Error } from '@src/res'

type Props = {
  text?: string
  buttonText?: string
  onAction?: () => void
}

const Error: FC<Props> = ({
  text = 'Something went wrong!',
  buttonText = 'Try Again',
  onAction = undefined,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Ic_Error color={'red'} />
      <TouchableOpacity
        onPress={() => onAction && onAction()}
        style={styles.button}>
        <Text style={styles.bText}>{buttonText}</Text>
      </TouchableOpacity>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: '24@ms',
  },
  button: {
    borderRadius: '10@ms',
    borderColor: 'red',
    borderWidth: 1,
    height: '40@ms',
    paddingHorizontal: '24@ms',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24@ms',
  },
  bText: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default Error
