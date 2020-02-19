import styled from 'styled-components/native';
import { Icon } from 'native-base';

export const SWeather = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 100%;
`;

export const WeatherIcon = styled(Icon)`
  font-size: 120px;
  color: ${({ color }) => color || '#eee'};
  text-align: center;
`;

export const City = styled.Text`
  font-size: 23px;
  text-align: center;
  color: #78f;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Temperature = styled.Text`
  font-size: 120px;
  color: #ccc;
  text-align: center;
`;

export const Description = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
`;

export const WeatherDetails = styled.View``;
