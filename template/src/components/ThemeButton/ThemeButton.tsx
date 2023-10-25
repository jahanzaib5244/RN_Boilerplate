import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useColorScheme} from 'src/utils/ColorScheme';

const ThemeButton = () => {
  const {toggle, colorScheme, active, colors} = useColorScheme();
  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart(e => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });
  return (
    <GestureDetector gesture={tap}>
      <Feather
        name={colorScheme === 'light' ? 'moon' : 'sun'}
        color={colors?.black}
        size={32}
      />
    </GestureDetector>
  );
};

export default ThemeButton;
