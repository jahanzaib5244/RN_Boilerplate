import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface props {
  itemStyle?: StyleProp<ViewStyle>;
  itemtextStyle?: StyleProp<TextStyle>;
  itemContainerstyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  items: Record<string, any>[] | string[];
  defaultvalue?: Record<string, any>;
  placeholder?: string;
  onChange?: (e: string) => void;
  objectKey?: string;
  objectValue?: string;
}
