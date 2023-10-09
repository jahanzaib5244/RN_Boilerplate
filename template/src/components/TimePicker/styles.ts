import {StyleSheet} from 'react-native';

import {COLORS, DIMENSION} from '../../constants';

export const styles = StyleSheet.create({
  root: {
    width: DIMENSION.width * 0.9,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    marginTop: 10,
    columnGap: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
  masked_elemnt_wrapper: {
    width: DIMENSION.width * 0.7,
    overflow: 'hidden',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: (DIMENSION.width * 0.7) / 4,
  },
  absolute_container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    justifyContent: 'space-around',
    height: 150,
    width: DIMENSION.width * 0.7,
    alignSelf: 'center',
  },
  gesture_wrapper: {
    height: '100%',
    width: (DIMENSION.width * 0.7) / 3,
  },
  masked_view: {
    height: 50,
    backgroundColor: 'grey',
  },
  maked_view_black: {
    height: 50,
    backgroundColor: '#000000',
  },
  items_container: {
    width: (DIMENSION.width * 0.7) / 3,
  },
  masked_view_wrapper: {
    width: DIMENSION.width * 0.7,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  time_seprator: {
    fontSize: 22,
    marginTop: 60,
    fontWeight: '700',
  },
});
