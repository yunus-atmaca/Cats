import React, { FC } from 'react'
import { FlatList, FlatListProps, Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { useAppDispatch, useAppSelector } from '@src/types/store'
import Cat from '../CatsByACategory/Cat'

type Props = {}

const Favorites: FC = ({}) => {
  const favorites = useAppSelector(s => s.favoriteController.favorites)

  const renderFavorite: FlatListProps<ICat>['renderItem'] = ({ item }) => {
    return <Cat c={item} />
  }

  return (
    <>
      {favorites.length > 0 && <Text style={styles.fText}>Favorites</Text>}
      {favorites.length > 0 && (
        <FlatList<ICat>
          data={favorites}
          renderItem={renderFavorite}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => 'k-' + i}
        />
      )}
    </>
  )
}

const styles = ScaledSheet.create({
  fText: {
    fontSize: 24,
    color: 'black',
    marginStart: '16@ms',
    fontWeight: '600',
    marginVertical: '12@ms',
  },
})

export default Favorites
