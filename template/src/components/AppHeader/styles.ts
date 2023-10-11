import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
    elevation: 2,
  },
  header_container: {
    flex: 1,
  },
  align_Center: {
    alignItems: 'center',
  },
  align_last: {
    alignItems: 'flex-end',
  },
  header_text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
