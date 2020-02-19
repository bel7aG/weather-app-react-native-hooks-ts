import React, { useState, useEffect, FC } from 'react';
import { Root, Container } from 'native-base';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { openWeatherMapApi } from 'api';
import Weather, {
  Header,
  SearchBar,
  Loader,
  DismissKeyboard,
} from 'components';
import { Toaster, celcius } from 'helpers';
import { IWeather } from 'models';

const App: FC = () => {
  const [seachText, setSearchText] = useState<string>('');

  const [weather, setWeather] = useState<IWeather>({
    cityName: '',
    temp: null,
    cityWeather: [],
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handleSearch('Paris');
  }, []);

  const handleSearch = async (city: string) => {
    setLoading(true);
    try {
      const response = await openWeatherMapApi(city).get('', {});
      const { data } = response;

      const { name: cityName, main, weather: cityWeather } = data;
      console.log(data);
      const temp = celcius(main.temp);

      setWeather({
        cityName,
        temp,
        cityWeather,
      });
      setLoading(false);
    } catch (error) {
      setWeather({
        cityName: '',
        temp: null,
        cityWeather: [],
      });
      setLoading(false);
      Toaster({ text: 'Something went wrong', type: 'danger' });
    }
  };

  const handleChange = text => {
    setSearchText(text);
  };

  return (
    <DismissKeyboard>
      <Root>
        <SApplication>
          <Header searchBar rounded>
            <SearchBar
              disabled={loading}
              handleChange={handleChange}
              handleSearch={handleSearch}
              value={seachText}
            />
          </Header>
          {loading ? (
            <Loader size={55} />
          ) : (
            <SContainer>
              <Weather {...weather} />
            </SContainer>
          )}
        </SApplication>
      </Root>
    </DismissKeyboard>
  );
};

const SApplication = styled(Container)`
  min-height: ${Math.round(Dimensions.get('window').height)};
`;

const SContainer = styled(Container)`
  flex: 1;
  background-color: #9efaef;
`;

export default App;
