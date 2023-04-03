import React, { FC } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { useAppDispatch } from '@src/types/store'
import { Constants, Storage } from '@src/utils'
import { setUser } from '@src/store/controllers/auth'

type Props = {
  user: IUser
}

const User: FC<Props> = ({ user }) => {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    Storage.save(Constants.USER_KEY, '')
    dispatch(setUser(undefined as any))
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.info}>USER INFO</Text>
        <Text style={styles.text}>{JSON.stringify(user)}</Text>
      </ScrollView>
      <TouchableOpacity onPress={onLogout} style={styles.button}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  info: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    margin: '16@ms',
  },
  text: {
    margin: '16@ms',
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  button: {
    width: '100%',
    height: '56@ms',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
})

export default User
