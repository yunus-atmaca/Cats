import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const init = (): Storage => {
  return new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null, //never expire
  })
}

const save = async (key: string, data: any) => {
  const store: Storage = init()

  await store.save({
    key: key,
    data: data,
    expires: null, //never expire
  })
}

const load = (key: string): Promise<any> => {
  const storage: Storage = init()

  return new Promise(async resolve => {
    let res = undefined
    try {
      res = await storage.load({ key: key })
    } catch (error) {}

    resolve(res)
  })
}

export { load, save }
