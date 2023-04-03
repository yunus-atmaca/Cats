import axios from 'axios'
import { Platform } from 'react-native'

const BASE_URL = 'https://api.thecatapi.com/v1/'

export const EndPoints = {
  categories: 'categories',
}

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Platform: Platform.OS === 'android' ? 'Android' : 'iOS',
    accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key':
      'live_q5J4lrtNpYdr9KyJ90xhr4BGAzXap2C7hCNFXyC2avIOONnCrmVJV0sjw5tiXwWt',
  },
})
