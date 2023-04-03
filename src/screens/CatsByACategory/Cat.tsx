import React, { FC, useState } from 'react'
import { Share, TouchableOpacity, View, Image, Alert } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_Share, Ic_Favorite } from '@src/res'
import { useAppDispatch, useAppSelector } from '@src/types/store'
import { addCat, removeCat } from '@src/store/controllers/favorite'
import { useEffect } from 'react'

type Props = {
  c: ICat
}

const Cat: FC<Props> = ({ c }) => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(s => s.favoriteController.favorites)

  const [isFavorite, setIsFavorite] = useState(
    favorites.some(cat => cat.id === c.id),
  )

  /*useEffect(()=>{
    console.debug('useEffect')
    console.debug(favorites)
  },[favorites])*/

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'A framework for building native apps using React',
        url: c.url,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }

  const onFavorite = () => {
    const newState = !isFavorite
    setIsFavorite(newState)

    if (newState) {
      dispatch(addCat(c))
    } else {
      dispatch(removeCat(c))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cat}>
        <Image
          style={{ width: '100%', height: 180 }}
          resizeMode={'cover'}
          source={{ uri: c.url }}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={onFavorite}
            style={[styles.button, { marginEnd: 12 }]}>
            <Ic_Favorite color={isFavorite ? 'red' : 'black'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare} style={styles.button}>
            <Ic_Share />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '16@ms',
  },
  cat: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: '16@ms',
    borderRadius: '16@ms',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '24@ms',
  },
  button: {},
})

export default Cat
