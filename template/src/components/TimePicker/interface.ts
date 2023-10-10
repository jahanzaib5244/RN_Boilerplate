import {Modal, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type props = Modal['props'] & CustomModalProps;

export interface CustomModalProps {
  handelChange?: (e: selectedTime) => void;
  visible?: boolean;
  onPressCancel?: () => void;
  onPressConfirm?: () => void;
  style?: {
    buttonsContainer?: StyleProp<ViewStyle>;
    cancelButton?: StyleProp<ViewStyle>;
    confirmButton?: StyleProp<ViewStyle>;
    footerButton?: StyleProp<ViewStyle>;
    footerButtonsText: StyleProp<TextStyle>;
    cancelButtonText: StyleProp<TextStyle>;
    confirmButtonText: StyleProp<TextStyle>;
    timeText: StyleProp<TextStyle>;
    timeTextContainer: StyleProp<ViewStyle>;
  };
  header?: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
}
export interface selectedTime {
  hour: string;
  minutes: string;
  format: string;
  time: string;
}
