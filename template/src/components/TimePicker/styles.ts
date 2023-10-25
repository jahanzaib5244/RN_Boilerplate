import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';
import {width} from 'src/helper';

export const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    marginTop: 10,
    columnGap: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
  masked_elemnt_wrapper: {
    width: width * 0.7,
    overflow: 'hidden',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width * 0.7) / 4,
  },
  absolute_container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    justifyContent: 'space-around',
    height: 150,
    width: width * 0.7,
    alignSelf: 'center',
  },
  gesture_wrapper: {
    height: '100%',
    width: (width * 0.7) / 3,
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
    width: (width * 0.7) / 3,
  },
  masked_view_wrapper: {
    width: width * 0.7,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  time_seprator: {
    fontSize: 22,
    marginTop: 60,
    fontWeight: '700',
  },
  back_drop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  buttons: {
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  btn_txt: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
  time: {
    fontSize: 24,
    fontWeight: '700',
  },
});
