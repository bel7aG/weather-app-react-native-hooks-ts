import React, { FC } from 'react';
import { IWeather } from 'models';
import { Text } from 'native-base';

import {
  SWeather,
  WeatherDetails,
  WeatherIcon,
  City,
  Temperature,
  Description,
} from './SWeather';

const Weather: FC<IWeather> = props => {
  const { cityName, temp, cityWeather } = props;

  const isClearWeather = (wrapper: object): boolean => {
    return wrapper[0].description.includes('clear') ? true : false;
  };

  return (
    <SWeather>
      {cityName && temp !== null && cityWeather ? (
        <WeatherDetails>
          <City>{cityName}</City>
          <Temperature>{temp}</Temperature>
          <WeatherIcon
            color={isClearWeather(cityWeather) ? '#f77' : '#5C96EE'}
            name={
              isClearWeather(cityWeather) ? 'ios-sunny' : 'ios-cloud-outline'
            }
          />
          <Description>{cityWeather[0].description}</Description>
        </WeatherDetails>
      ) : (
        <>
          <WeatherIcon name="ios-cloud-outline" />
          <Text>Weedoo it</Text>
        </>
      )}
    </SWeather>
  );
};
export default Weather;
