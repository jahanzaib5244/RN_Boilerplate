import {StyleSheet} from 'react-native';
import COLORS from '../../constants/COLORS';
import DIMENSION from '../../constants/DIMENSION';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  header_container: {
    height: 220,
  },
  content_container: {
    flex: 1,
    top: -20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.white,
  },
  home_vector: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  header_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 30,
  },
  icon_container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  heading: {
    color: COLORS.white,
    fontSize: 25,

    letterSpacing: 0.5,
    fontWeight: '600',
  },
  noti_container: {
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell_icon: {
    height: 14,
    width: 14,
  },
  seprator: {
    width: 10,
  },
  search_container: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    height: 48,
    borderRadius: 28,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    elevation: 1.5,
    position: 'absolute',
    top: -24,
    width: DIMENSION.width - 40,
  },
  explore_container: {
    marginTop: 38,
  },
  explore_txt: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
  },
  buttons_continer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginTop: 15,
  },
  exp_btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  exp_btn_txt: {
    fontSize: 14,
    color: COLORS.gray,
    paddingVertical: 13,
  },
  image_wrapper: {
    height: 50,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearby_food: {
    marginHorizontal: 20,
  },
  heading_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section_title: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.black,
  },
  v_all_txt: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.gray,
  },
  food_item: {
    height: 162,
    width: 276,
    marginRight: 10,
    justifyContent: 'flex-end',
  },
  food_image: {
    ...StyleSheet.absoluteFillObject,
  },
  food_name: {
    fontSize: 17,
    color: COLORS.white,
    fontWeight: '600',
  },
  food_address: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.white,
  },
  scroll_view: {
    marginTop: 13,
  },
  item_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    alignItems: 'center',
    paddingBottom: 15,
  },
  add_icon: {
    height: 23,
    width: 22,
    resizeMode: 'contain',
  },
  sights_container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  sights_wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  sight: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 14,
    borderColor: '#E0E0E0',
    width: DIMENSION.width * 0.43,
  },
  sight_content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  sight_name: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  sight_address: {
    fontSize: 11,
    fontWeight: '400',
    color: COLORS.gray,
  },
  sight_image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  sight_img_wrapper: {
    height: 110,
  },
});
