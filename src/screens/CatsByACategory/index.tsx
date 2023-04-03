import React, { FC, useState } from 'react'
import { Text, View, FlatList, FlatListProps } from 'react-native'

import { CreatorScreenProps } from '@src/types/navigation'
import { ScaledSheet } from 'react-native-size-matters'

import { Header } from '@src/components'
import { useCats } from '@src/hooks/api'
import { OverlayLoading } from '@src/components'

import Cat from './Cat'

const CatsByACategory: FC<CreatorScreenProps<'CatsByACategory'>> = ({
  route,
}) => {
  const { id, name } = route.params.category
  const [page, setPage] = useState(1)

  const catRes = useCats(id, page)

  const renderCat: FlatListProps<ICat>['renderItem'] = ({ item }) => {
    return <Cat c={item} />
  }

  return (
    <View style={styles.container}>
      <Header routeName={name} />
      {catRes.items.length > 0 && (
        <FlatList<ICat>
          data={catRes.items}
          renderItem={renderCat}
          keyExtractor={(_, i) => 'c-' + i}
        />
      )}
      {catRes.items.length === 0 && (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.empty}>There is no cat in that category</Text>
        </View>
      )}
      {catRes.loading && <OverlayLoading />}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
})

export default CatsByACategory
