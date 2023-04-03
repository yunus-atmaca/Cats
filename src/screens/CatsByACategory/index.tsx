import React, { FC, useState } from 'react'
import { View, FlatList, FlatListProps } from 'react-native'

import { CreatorScreenProps } from '@src/types/navigation'
import { ScaledSheet } from 'react-native-size-matters'

import { Header } from '@src/components'
import { useCats } from '@src/hooks/api'

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
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
})

export default CatsByACategory
