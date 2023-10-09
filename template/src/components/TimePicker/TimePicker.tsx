import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {PanGestureHandler} from 'react-native-gesture-handler';

const Hours: Array<string> = [];
const minutes: Array<string> = [];

for (let i = 0; i <= 12; i++) {
  Hours.push(i <= 9 ? `0${i}` : `${i}`);
}

for (let i = 0; i <= 60; i++) {
  minutes.push(i <= 9 ? `0${i}` : `${i}`);
}

export default function TimePicker() {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateY.value = event.translationY;
    },
    onEnd: event => {
      if (event.translationY > 0) {
        translateY.value = 0;
      } else {
        translateY.value = withSpring(-100, {}, isFinished => {
          if (isFinished) {
            //   runOnJS(handleItemChange)();
          }
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  //   const handleItemChange = () => {
  //     // Calculate the selected item based on translateY value
  //     const selectedItemIndex = Math.floor((-translateY.value + 50) / 100);
  //     console.log('Selected Item:', items[selectedItemIndex]);
  //   };

  return (
    <View style={styles.root}>
      <View>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[{height: 200, backgroundColor: '#ccc'}, animatedStyle]}>
            {Hours.map((item, index) => (
              <View
                key={index}
                style={{
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 24}}>{item}</Text>
              </View>
            ))}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
}
