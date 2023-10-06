import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  error: {
    marginTop: 5,
    paddingLeft: 5,
    color: COLORS.danger,
    fontSize: 14,
  },
});
