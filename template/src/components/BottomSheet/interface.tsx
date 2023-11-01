import {StyleProp, ViewStyle} from 'react-native';

export type BottomSheetProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  height?: number;
};

export type BottomSheetHandler = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
  toggle: () => void;
};
export type context = {
  translateY: number;
};
