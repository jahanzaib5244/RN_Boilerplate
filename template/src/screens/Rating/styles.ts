import {StyleSheet} from 'react-native';
import COLORS from '../../constants/COLORS';
import DIMENSION from '../../constants/DIMENSION';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  back_icon: {},
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    color: COLORS.black,
  },
  noti_icon: {},
  header: {
    height: 55,
    backgroundColor: COLORS.white,
    elevation: 1.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review_txt: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.black,
  },
  scrollView: {
    flexGrow: 1,
    marginHorizontal: 20,
  },
  rating_card: {
    flexDirection: 'row',
    width: DIMENSION.width - 40,
    paddingRight: 20,
    marginTop: 10,
  },
  rat_content: {
    marginLeft: 10,
    flex: 1,
    paddingTop: 20,
  },
  star_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  star_icon: {
    height: 14,
    width: 14,
  },
  user_name: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '400',
    paddingVertical: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    paddingTop: 5,
  },
  rating_count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating_header: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  rating_txt_container: {
    flex: 0.4,
    alignItems: 'center',
  },
  rating_star_container: {
    flex: 1,
    paddingRight: 20,
  },
  r_count: {
    fontSize: 30,
    color: COLORS.black,
    fontWeight: '600',
  },
  get_rating_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 4,
    marginBottom: 4,
  },
  stars_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    columnGap: 5,
  },
  slider: {
    flex: 1,
  },
  line: {
    height: 7,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  star: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
});
