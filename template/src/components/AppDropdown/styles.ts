import {StyleSheet} from 'react-native';
import {Font, Height, Width, width} from 'src/helper';

export const styles = StyleSheet.create({
  button: {},
  buttonText: {},
  container: {},
  dropdown_wrapper: {
    height: 50,
    borderWidth: Width(1),
    width: width * 0.9,
    borderRadius: Width(5),
    borderColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    paddingLeft: Width(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: Width(15),
  },
  down_arrow: {
    height: Width(12),
    width: Width(12),
    tintColor: 'rgba(0,0,0,0.9)',
  },
  content_container: {
    width: width * 0.9,
    marginTop: 53,
    maxHeight: Height(200),
    overflow: 'hidden',
    borderWidth: Width(1),
    borderColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    paddingRight: 10,
    fontSize: Font(13),
    fontWeight: '600',
  },
  flatlist: {
    flexGrow: 1,
    maxHeight: Height(200),
    borderRadius: 4,
  },
  menu_item: {
    marginRight: 0,
    maxWidth: width * 0.9,
    height: Height(33),
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
