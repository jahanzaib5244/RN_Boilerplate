import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import React, {
  useCallback,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import {BottomSheetHandler, BottomSheetProps} from './interface';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useColorScheme} from 'src/utils/ColorScheme';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const spring_config = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const BottomSheet = forwardRef<BottomSheetHandler, BottomSheetProps>(
  ({children, style = {}, height = SCREEN_HEIGHT * 0.5}, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);
    const [openModal, setopenModal] = useState(false);
    const {colors} = useColorScheme();
    const {bottom} = useSafeAreaInsets();

    const close_modal = () => {
      setopenModal(false);
    };

    const open_modal = () => {
      setopenModal(true);
    };

    const scrollTo = useCallback(
      (destination: number) => {
        active.value = destination !== 0;
        if (destination !== 0) {
          open_modal();
          setTimeout(() => {
            translateY.value = withSpring(-destination, spring_config);
          }, 0);
          return;
        }
        translateY.value = withSpring(destination, spring_config, () => {
          if (destination === 0) {
            runOnJS(close_modal)();
          }
        });
      },
      [active, translateY],
    );

    const toggle = useCallback(() => {
      if (active.value) {
        scrollTo(0);
      } else {
        scrollTo(height);
      }
    }, [active, scrollTo, height]);

    const isActive = useCallback(() => {
      return translateY.value !== 0;
    }, [translateY.value]);

    useImperativeHandle(ref, () => ({scrollTo, isActive, toggle}), [
      scrollTo,
      isActive,
      height,
    ]);

    const pangestureEvent = useAnimatedGestureHandler({
      onStart: (_, context: {translateY: number}) => {
        context.translateY = translateY.value;
      },
      onActive: (event, context) => {
        const taegtvalue = event.translationY + context.translateY;
        if (taegtvalue > -height) {
          translateY.value = event.translationY + context.translateY;
        }
      },
      onEnd: () => {
        const snapPoint = height - height / 4;
        const currentValue = Math.abs(translateY.value);
        if (currentValue < snapPoint) {
          runOnJS(scrollTo)(0);
        } else {
          runOnJS(scrollTo)(height);
        }
      },
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateY: translateY.value}],
        shadowOpacity: withTiming(active.value ? 0.2 : 0),
        height,
      };
    });

    const rBackdropStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(active.value ? 1 : 0),
        backgroundColor: 'rgba(0,0,0,0.4)',
      };
    }, []);

    return (
      <Modal transparent={true} visible={openModal}>
        <GestureHandlerRootView style={styles.gesture_handler}>
          <Animated.View
            onTouchStart={() => {
              scrollTo(0);
            }}
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                paddingBottom: bottom,
              },
              style,
              rBackdropStyle,
            ]}
            animatedProps={{
              pointerEvents: 'auto',
            }}
          />
          <PanGestureHandler onGestureEvent={pangestureEvent}>
            <Animated.View
              style={[
                styles.bottomSheetContainer,
                {
                  top: SCREEN_HEIGHT,
                  backgroundColor: colors?.white,
                  shadowColor: colors?.black,
                },
                style,
                rBottomSheetStyle,
              ]}>
              <Animated.View style={[styles.header]}>
                <View style={styles.line} />
              </Animated.View>
              {children}
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </Modal>
    );
  },
);

export default BottomSheet;
