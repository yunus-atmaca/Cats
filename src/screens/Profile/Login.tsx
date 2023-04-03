import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { setUser } from '@src/store/controllers/auth'
import { useAppDispatch } from '@src/types/store'
import { Constants, Storage } from '@src/utils'
import { Alert } from 'react-native'

type Props = {}

const Login: FC<Props> = ({}) => {
  const dispatch = useAppDispatch()

  const onLogin = async () => {
    GoogleSignin.configure({
      webClientId:
        '644593342659-0pgdpjl6emrhs2uaf35mtilco8tl9aot.apps.googleusercontent.com',
      offlineAccess: true,
    })

    let retValue = {
      success: false,
      data: undefined,
    }

    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()

      console.debug('userInfo -> ', userInfo)

      Storage.save(Constants.USER_KEY, JSON.stringify(userInfo))
      dispatch(setUser(userInfo as any))
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.debug('user cancelled the login flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.debug('operation (e.g. sign in) is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.debug('play services not available or outdated')
      } else {
        // some other error happened
        console.debug('some other error happened')
      }
      Alert.alert('Error!', JSON.stringify(error))
    }

    return retValue
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: 'black', marginBottom: 40 }]}>
        You haven't logged in yet
      </Text>
      <TouchableOpacity onPress={onLogin} style={styles.button}>
        <Text style={styles.text}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '16@ms',
  },
  button: {
    width: '100%',
    height: '48@ms',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'grey',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '18@ms',
    color: 'white',
    fontWeight: '600',
  },
})

export default Login
