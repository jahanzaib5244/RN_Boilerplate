import {createRef} from 'react';
import {AlertHandler, AlertOptions} from '../components/AppAlert/interface';

export const AlertRef = createRef<AlertHandler>();

export const showAlert = (props: AlertOptions) => {
  return AlertRef.current?.show(props);
};

export const hideAlert = () => {
  return AlertRef.current?.hide();
};
