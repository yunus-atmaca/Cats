import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'

import { CreatorScreenProps } from '@src/types/navigation'
import { ScaledSheet } from 'react-native-size-matters'

import Header from '../CatsByACategory/Header'

const CatDetails: FC<CreatorScreenProps<'CatDetails'>> = ({ route }) => {
  const { cat } = route.params

  return (
    <View style={styles.container}>
      <Header routeName="Cat Details" />
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: cat.url }} />
        {cat.breeds && cat.breeds?.length > 0 && (
          <Text style={styles.text}>{JSON.stringify(cat.breeds)}</Text>
        )}

        {cat.categories && cat.categories?.length > 0 && (
          <Text style={styles.text}>
            {'Category : ' + cat.categories[0].name}
          </Text>
        )}
        <Text style={styles.text}>{'ID: ' + cat.id}</Text>
        <Text style={styles.text}>{'Url: ' + cat.url}</Text>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: '16@ms',
  },
  image: {
    width: '100%',
    height: '180@ms',
    borderRadius: '16@ms',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginTop: '10@ms',
  },
})

export default CatDetails
