import {AwesomeAlertProps} from 'react-native-awesome-alerts';

export interface AlertOptions extends Omit<AwesomeAlertProps, ''> {
  cancelText?: string;
  confirmText?: string;
  title?: string;
  message?: string;
  onConfirmPress?: () => void;
  onCancelPress?: () => void;
}

export interface AlertHandler {
  show: (options: AlertOptions) => void;
  hide: () => void;
}
