import React, { FC, useState, useEffect } from 'react'
import { View, FlatList, FlatListProps } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'
import { useCategories } from '@src/hooks/api'
import { Error, OverlayLoading } from '@src/components'

import CatCategory from './Category'
import Header from './Header'

const Home: FC<CreatorScreenProps<'Home'>> = () => {
  const [refresh, setRefresh] = useState(0)

  const catRes = useCategories(refresh)

  useEffect(() => {})

  const renderCategory: FlatListProps<ICatCategory>['renderItem'] = ({
    index,
    item,
  }) => {
    return <CatCategory category={item} />
  }

  const _onActionError = () => setRefresh(prev => prev + 1)

  return (
    <View style={styles.container}>
      <Header />
      {catRes.items.length > 0 && (
        <FlatList<ICatCategory>
          data={catRes.items}
          renderItem={renderCategory}
          keyExtractor={(_, i) => 'key-' + i}
          contentContainerStyle={styles.flat}
        />
      )}

      {catRes.loading && <OverlayLoading />}
      {catRes.error && <Error onAction={_onActionError} />}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
  flat: {
    marginTop: '18@ms',
  },
})

export default Home
