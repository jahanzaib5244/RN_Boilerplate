import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Hours: Array<string> = [];
const minutes: Array<string> = [];

for (let i = 0; i <= 11; i++) {
  Hours.push(i <= 8 ? `0${i + 1}` : `${i + 1}`);
}

for (let i = 0; i <= 59; i++) {
  minutes.push(i <= 8 ? `0${i + 1}` : `${i + 1}`);
}

export default function useTimePicker() {
  const hoursY = useSharedValue(0);
  const minutesY = useSharedValue(0);
  const typeY = useSharedValue(0);

  // hours gesture handler
  const hoursGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: {translateY: number}) => {
      context.translateY = hoursY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) < (Hours.length - 1) * 50) {
          console.log('value');
          hoursY.value = event.translationY + context.translateY;
        }
      }
    },
    onEnd: () => {
      const targetValue = Math.round(hoursY.value / 50);
      hoursY.value = withTiming(targetValue * 50, {duration: 100});
      // runOnJS(handleItemChange)();
    },
  });

  // minnutes gesture handler
  const minutesGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: {translateY: number}) => {
      context.translateY = minutesY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) < (minutes.length - 1) * 50) {
          console.log('value');
          minutesY.value = event.translationY + context.translateY;
        }
      }
    },
    onEnd: () => {
      const targetValue = Math.round(minutesY.value / 50);
      minutesY.value = withTiming(targetValue * 50, {duration: 100});
      // runOnJS(handleItemChange)();
    },
  });

  // type gesture handler
  const typeGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: {translateY: number}) => {
      context.translateY = typeY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) < (2 - 1) * 50) {
          console.log('value');
          typeY.value = event.translationY + context.translateY;
        }
      }
    },
    onEnd: () => {
      const targetValue = Math.round(typeY.value / 50);
      typeY.value = withTiming(targetValue * 50, {duration: 100});
      // runOnJS(handleItemChange)();
    },
  });

  // hours aimated computes style
  const hoursAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: hoursY.value}],
    };
  });

  // minutes aimated computes style
  const minutesAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: minutesY.value}],
    };
  });

  // type aimated computes style
  const typeAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: typeY.value}],
    };
  });

  return {
    hoursAnimatedStyle,
    minutesAnimatedStyle,
    typeAnimatedStyle,
    hoursY,
    minutesY,
    typeY,
    hoursGestureHandler,
    minutesGestureHandler,
    typeGestureHandler,
    Hours,
    minutes,
  };
}
