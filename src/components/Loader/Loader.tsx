import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { SLoader } from './SLoader';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
  hidesWhenStopped?: boolean;
}

const Loader: FC<LoaderProps> = ({
  size = 'large',
  color = '#69A3FD',
  hidesWhenStopped,
}) => {
  return (
    <SLoader>
      <ActivityIndicator
        color={color}
        size={size}
        hidesWhenStopped={hidesWhenStopped}
      />
    </SLoader>
  );
};
export default Loader;
