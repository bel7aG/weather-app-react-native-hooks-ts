import axios from 'axios';
import { WEATHER_API_KEY } from 'react-native-dotenv';
  console.log(WEATHER_API_KEY)

export const openWeatherMapApi = (city: string = 'Paris') =>
  axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`,
    timeout: 9000,
  });
