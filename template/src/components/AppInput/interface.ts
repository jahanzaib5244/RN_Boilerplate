import {StyleProp, ViewStyle} from 'react-native';
import {TextInputProps} from 'react-native-paper/';

export interface props extends Omit<TextInputProps, 'value' | 'error'> {
  label: string;
  style?: StyleProp<ViewStyle>;
  value: string;
  error?: string;
  secureTextEntry?: boolean;
  inputStyle?: StyleProp<Text>;
  errorStyle?: StyleProp<Text>;
  onChangeText?: (e: string) => void;
}
