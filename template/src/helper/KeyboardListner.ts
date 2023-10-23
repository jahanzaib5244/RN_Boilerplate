import {Keyboard, KeyboardEvent} from 'react-native';
import {useEffect, useState} from 'react';

export const KeyboardListner = () => {
  const [height, setheight] = useState<number>(0);
  useEffect(() => {
    const showKeyboard = Keyboard.addListener(
      'keyboardWillShow',
      (e: KeyboardEvent) => {
        setheight(e?.endCoordinates?.height ?? 0);
      },
    );
    const hideKeyboard = Keyboard.addListener('keyboardWillHide', () => {
      setheight(0);
    });
    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return {height};
};
