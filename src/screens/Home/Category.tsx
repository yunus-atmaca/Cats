import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_ArrowForward } from '@src/res/'
import { getNavContainerRef } from '@src/types/navigation'

type Props = {
  category: ICatCategory
}

const CatCategory: FC<Props> = ({ category }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        getNavContainerRef().navigate('CatsByACategory', {
          category,
        })
      }
      style={styles.container}>
      <Text style={styles.text}>{category.name.toUpperCase()}</Text>
      <Ic_ArrowForward />
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    //paddingVertical: '8@ms',
    paddingHorizontal: '16@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    height: '56@ms',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
})

export default CatCategory
