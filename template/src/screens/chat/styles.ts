import {StyleSheet} from 'react-native';
import COLORS from '../../constants/COLORS';

export const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: COLORS.white,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  back_icon: {},
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    color: COLORS.black,
  },
  scroll_view: {
    flexGrow: 1,
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  message_container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  message: {
    fontSize: 14,
    color: COLORS.black,
  },
  date: {
    alignSelf: 'flex-end',
    paddingTop: 15,
    fontSize: 12,
    color: COLORS.gray,
  },
  input_container: {
    height: 52,
    elevation: 2,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    columnGap: 5,
  },
  input: {
    flex: 1,
  },
  input_icon: {
    height: 18,
    width: 18,
  },
  resp_time: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '400',
    paddingVertical: 5,
  },
  info_req: {
    backgroundColor: COLORS.light_gray,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 10,
    color: COLORS.black_text,
    position: 'absolute',
    top: 65,
  },
});
