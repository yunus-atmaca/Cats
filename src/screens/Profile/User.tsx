import React, { FC } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, ScaledSheet } from 'react-native-size-matters'

import { useAppDispatch, useAppSelector } from '@src/types/store'
import { Constants, Storage } from '@src/utils'
import { setUser } from '@src/store/controllers/auth'
import { Styles } from '@src/res'

import Cat from '../CatsByACategory/Cat'
import { setCats } from '@src/store/controllers/favorite'

type Props = {
  user: IUser
}

const User: FC<Props> = ({ user }) => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(s => s.favoriteController.favorites)

  const onLogout = () => {
    Storage.save(Constants.USER_KEY, '')
    Storage.save(Constants.FAVORITE_CATS, '')
    dispatch(setCats([]))
    dispatch(setUser(undefined as any))
  }

  const renderFavorite = (item: ICat, index: number) => {
    return <Cat key={'c' + index} c={item} />
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.infoC}>
          <Image source={{ uri: user.user.photo }} style={styles.photo} />
          <View style={styles.texts}>
            <Text numberOfLines={1} style={styles.text}>
              {(user.user.givenName + ' ' + user.user.familyName).toUpperCase()}
            </Text>
            <Text numberOfLines={1} style={styles.text}>
              {user.user.email}
            </Text>
            <Text numberOfLines={1} style={styles.text}>
              {user.user.id}
            </Text>
          </View>
        </View>

        <Text style={styles.fText}>Favorites</Text>
        {favorites.length > 0 &&
          favorites.map((f, i) => {
            return renderFavorite(f, i)
          })}
        {favorites.length === 0 && (
          <Text style={styles.noFText}>There are no favorites cats</Text>
        )}
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
  photo: {
    width: '96@ms',
    height: '96@ms',
    borderRadius: 300,
  },
  infoC: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '16@ms',
  },
  texts: {
    marginStart: '12@ms',
    height: '96@ms',
    //backgroundColor: 'red',
    maxWidth: Styles.S_WIDTH - moderateScale(140),
    justifyContent: 'space-between',
    paddingVertical: '12@ms',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  fText: {
    fontSize: 24,
    color: 'black',
    marginStart: '16@ms',
    fontWeight: '600',
    marginVertical: '12@ms',
  },
  noFText: {
    fontSize: 14,
    color: 'black',
    marginStart: '16@ms',
    marginVertical: '12@ms',
    alignSelf: 'center',
    textAlign: 'center',
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
