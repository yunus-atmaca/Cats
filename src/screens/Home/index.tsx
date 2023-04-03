import React, { FC } from 'react'
import { View, FlatList, FlatListProps } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CreatorScreenProps } from '@src/types/navigation'
import { useCategories } from '@src/hooks/api'

import CatCategory from './Category'
import Header from './Header'

const Home: FC<CreatorScreenProps<'Home'>> = () => {
  const catRes = useCategories()

  const renderCategory: FlatListProps<ICatCategory>['renderItem'] = ({
    index,
    item,
  }) => {
    return <CatCategory category={item} />
  }

  return (
    <View style={styles.container}>
      <Header />
      {catRes.items.length > 0 && (
        <FlatList<ICatCategory>
          data={catRes.items}
          renderItem={renderCategory}
          keyExtractor={(_, i) => 'key-' + i}
        />
      )}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
})

export default Home
