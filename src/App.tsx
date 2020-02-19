import React, { useEffect, FC } from 'react';
import styled from 'styled-components/native';
import { AxiosResponse } from 'axios';

import { Loader } from 'components';
import { openWeatherMapApi } from 'api';
import { Toaster } from 'helpers';
import { Root, Button, Text } from 'native-base';

const App: FC = () => {
  useEffect(() => {
    handlButton('Rades');
  }, []);

  const handlButton = async (city: string): Promise<any> => {
    try {
      const response: AxiosResponse = await openWeatherMapApi(city).get('', {});
      console.log(response);
    } catch(error) {
      console.log(error.message)
    }
  };

  return (
    <Root>
      <SApplication>
        <Loader />
          <Text>Toast</Text>
          <Text>Toast</Text>
          <Text>Toast</Text>
        <Button onPress={() => Toaster({ text: 'Belhassen' })}>
        </Button>
      </SApplication>
    </Root>
  );
};

const SApplication = styled.View`
`;

export default App;
