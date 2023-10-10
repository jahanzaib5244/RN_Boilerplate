import {StyleSheet} from 'react-native';
import {COLORS, DIMENSION} from '../../constants';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: DIMENSION.width * 0.9,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button_text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
