import {SharedValue} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';

const Hours: Array<string> = [];
const minutes: Array<string> = [];

for (let i = 0; i <= 11; i++) {
  Hours.push(i <= 8 ? `0${i + 1}` : `${i + 1}`);
}

for (let i = 0; i <= 59; i++) {
  minutes.push(i <= 8 ? `0${i + 1}` : `${i + 1}`);
}

const formatType = ['AM', 'PM'];

export default function useTimePicker() {
  const hoursY = useSharedValue(0);
  const minutesY = useSharedValue(0);
  const typeY = useSharedValue(0);

  // calculate user picked time
  const handleItemChange = () => {
    const hours = Math.round(Math.abs(hoursY.value / 50));
    const time = Math.round(Math.abs(minutesY.value / 50));
    const type = Math.round(Math.abs(typeY.value / 50));
    console.log(Hours[hours], minutes[time], formatType[type]);
  };

  function calculateDecay(
    animationValue: SharedValue<number>,
    array: string[] | number[],
    velocityY: number,
  ) {
    'worklet';
    animationValue.value = withDecay({velocity: velocityY}, () => {
      const currentValue = animationValue.value;
      if (currentValue >= 0) {
        animationValue.value = withSpring(0, {duration: 100}, () => {
          runOnJS(handleItemChange)();
        });
        return;
      }
      if (Math.abs(currentValue) <= (array.length - 1) * 50) {
        animationValue.value = withSpring(
          Math.round(currentValue / 50) * 50,
          {
            duration: 150,
          },
          () => {
            runOnJS(handleItemChange)();
          },
        );
      } else {
        animationValue.value = withSpring(
          -(array.length - 1) * 50,
          {duration: 150},
          () => {
            runOnJS(handleItemChange)();
          },
        );
      }
    });
  }
  // hours gesture handler
  const hoursGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: {translateY: number}) => {
      context.translateY = hoursY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) < (Hours.length - 1) * 50) {
          hoursY.value = currentValue;
        }
      }
    },
    onEnd: e => {
      calculateDecay(hoursY, Hours, e.velocityY);
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
        if (Math.abs(currentValue) <= (minutes.length - 1) * 50) {
          minutesY.value = currentValue;
        }
      }
    },
    onEnd: e => {
      calculateDecay(minutesY, minutes, e.velocityY);
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
          typeY.value = event.translationY + context.translateY;
        }
      }
    },
    onEnd: e => {
      calculateDecay(typeY, formatType, e.velocityY);
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
