import { Toast } from 'native-base';

interface ToasterType {
  text: string;
  type?: 'danger' | 'success' | 'warning';
  duration?: number;
  position?: 'bottom' | 'top' | 'center';
}

export const Toaster = ({
  text,
  type = 'warning',
  duration = 2000,
  position = 'bottom',
}: ToasterType) =>
  Toast.show({
    text,
    type,
    duration,
    style: {
      opacity: 0.9,
    },
    position,
  });
