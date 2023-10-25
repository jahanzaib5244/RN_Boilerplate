import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {width} from 'src/helper';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width * 0.9,
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
