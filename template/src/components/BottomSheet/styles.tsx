import {Platform, StyleSheet} from 'react-native';
import {Height, Width, width} from 'src/helper';

export const styles = StyleSheet.create({
  bottomSheetContainer: {
    width: '100%',
    position: 'absolute',
    borderTopLeftRadius: Width(25),
    borderTopRightRadius: Width(25),
    shadowRadius: 4,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowOpacity: Platform.select({
      ios: 0.2,
      android: 1,
    }),
    elevation: 210,
  },
  line: {
    width: Width(50),
    height: Width(4),
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: Width(5),
  },
  label: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: Width(18),
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  map_header: {
    paddingVertical: Height(12),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: width,
    borderTopLeftRadius: Width(25),
    borderTopRightRadius: Width(25),
  },
  header: {
    paddingVertical: Height(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
