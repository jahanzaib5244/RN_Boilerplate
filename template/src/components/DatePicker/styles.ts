import {StyleSheet, Dimensions} from 'react-native';
import DIMENSION from '../../constants/DIMENSION';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  modal_overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calender_wrapper: {
    height: height * 0.4,
    backgroundColor: 'white',
    width: width * 0.9,
    paddingHorizontal: 20,
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 15,
    columnGap: 25,
    marginTop: 5,
  },
  footer_btn: {
    paddingVertical: 5,
  },
  footer_btn_txt: {
    fontSize: 16,
  },
  header: {},
  headerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  arrow: {
    height: 15,
    width: 15,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '600',
    color: 'black',
  },
  arrow_button: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  days_container: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  day_name: {
    fontSize: 14,
    color: 'black',
    width: (width * 0.9 - 10) / 7,
    textAlign: 'center',
  },
  date_container: {
    paddingVertical: 3,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  day_text: {
    color: 'black',
    fontSize: 15,
  },
});
