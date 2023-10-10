import {View, Text, Modal, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Animated from 'react-native-reanimated';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import MaskedView from '@react-native-masked-view/masked-view';
import useTimePicker from './useTimePicker';
import AppText from '../AppText/AppText';
import {props, selectedTime} from './interface';

const TimePicker: React.FC<props> = ({
  onPressCancel = () => {},
  onPressConfirm = () => {},
  visible = false,
  handelChange = (e: selectedTime) => {},
  style = {},
  confirmButtonText = 'Ok',
  cancelButtonText = 'Cancel',
  header = <></>,
  ...other
}) => {
  const {
    hoursAnimatedStyle,
    minutesAnimatedStyle,
    typeAnimatedStyle,
    hoursGestureHandler,
    minutesGestureHandler,
    typeGestureHandler,
    Hours,
    minutes,
    onConfirm,
  } = useTimePicker(handelChange, onPressConfirm);

  const RenderTime = ({item, index}: {item: string; index: number}) => {
    return (
      <Animated.View
        style={[
          styles.item,
          style?.timeTextContainer,
          {marginTop: index === 0 ? 50 : 0},
        ]}>
        <Text style={[styles.time, style?.timeText]}>{item}</Text>
      </Animated.View>
    );
  };

  const RenderedHours = () => {
    return (
      <Animated.View
        style={[
          hoursAnimatedStyle,
          styles.items_container,
          {alignItems: 'flex-end'},
        ]}>
        {Hours.map((item, index) => {
          return <RenderTime key={index} item={item} index={index} />;
        })}
      </Animated.View>
    );
  };
  const RenderedMinutes = () => {
    return (
      <Animated.View style={[minutesAnimatedStyle, styles.items_container]}>
        {minutes.map((item, index) => (
          <RenderTime key={index} item={item} index={index} />
        ))}
      </Animated.View>
    );
  };

  const RenderedType = () => {
    return (
      <Animated.View style={[typeAnimatedStyle, styles.items_container]}>
        {['AM', 'PM'].map((item, index) => (
          <RenderTime key={index} item={item} index={index} />
        ))}
      </Animated.View>
    );
  };

  const maskElement = (
    <View style={styles.masked_elemnt_wrapper}>
      <RenderedHours />
      <AppText style={styles.time_seprator}>:</AppText>
      <RenderedMinutes />
      <RenderedType />
    </View>
  );

  return (
    <Modal {...other} transparent visible={visible}>
      <GestureHandlerRootView style={styles.back_drop}>
        <View style={styles.root}>
          {header}
          <View>
            <MaskedView androidRenderingMode={'software'} {...{maskElement}}>
              <View style={styles.masked_view} />
              <View style={styles.maked_view_black} />
              <View style={styles.masked_view} />
            </MaskedView>
            <View style={styles.absolute_container}>
              <View style={styles.gesture_wrapper}>
                <PanGestureHandler onGestureEvent={hoursGestureHandler}>
                  <Animated.View style={StyleSheet.absoluteFillObject} />
                </PanGestureHandler>
              </View>
              <View style={styles.gesture_wrapper}>
                <PanGestureHandler onGestureEvent={minutesGestureHandler}>
                  <Animated.View style={StyleSheet.absoluteFillObject} />
                </PanGestureHandler>
              </View>
              <View style={styles.gesture_wrapper}>
                <PanGestureHandler onGestureEvent={typeGestureHandler}>
                  <Animated.View style={StyleSheet.absoluteFillObject} />
                </PanGestureHandler>
              </View>
            </View>
          </View>
          <View style={[styles.buttons, style.buttonsContainer]}>
            <Pressable
              onPress={onPressCancel}
              style={[style?.footerButton, style.cancelButton]}>
              <Text
                style={[
                  styles.btn_txt,
                  style?.footerButtonsText,
                  style?.cancelButtonText,
                ]}>
                {cancelButtonText}
              </Text>
            </Pressable>
            <Pressable
              onPress={onConfirm}
              style={[style?.footerButton, style.confirmButton]}>
              <Text
                style={[
                  styles.btn_txt,
                  style?.footerButtonsText,
                  style?.confirmButtonText,
                ]}>
                {confirmButtonText}
              </Text>
            </Pressable>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default TimePicker;
