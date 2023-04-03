import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {
  category: ICatCategory
}

const CatCategory: FC<Props> = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.name}</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '8@ms',
    paddingHorizontal: '16@ms',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
})

export default CatCategory
