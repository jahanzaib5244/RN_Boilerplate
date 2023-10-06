import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface props extends PressableProps {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  activityColor?: string;
}
