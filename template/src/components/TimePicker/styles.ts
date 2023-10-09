import {StyleSheet} from 'react-native';

import {DIMENSION} from '../../constants';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'red',
    width: DIMENSION.width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    columnGap: 30,
    // overflow: 'hidden',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
});
