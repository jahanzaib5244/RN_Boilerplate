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

export default function TimePicker() {
  const {
    hoursAnimatedStyle,
    minutesAnimatedStyle,
    typeAnimatedStyle,
    hoursGestureHandler,
    minutesGestureHandler,
    typeGestureHandler,
    Hours,
    minutes,
  } = useTimePicker();

  const RenderedHours = () => {
    return (
      <Animated.View
        style={[
          hoursAnimatedStyle,
          styles.items_container,
          {alignItems: 'flex-end'},
        ]}>
        {Hours.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.item,
                {
                  marginTop: index === 0 ? 50 : 0,
                  transform: [{rotateY: '10deg'}],
                },
              ]}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                }}>
                {item}
              </Text>
            </Animated.View>
          );
        })}
      </Animated.View>
    );
  };
  const RenderedMinutes = () => {
    return (
      <Animated.View style={[minutesAnimatedStyle, styles.items_container]}>
        {minutes.map((item, index) => (
          <View
            key={index}
            style={[styles.item, {marginTop: index === 0 ? 50 : 0}]}>
            <Text style={{fontSize: 24, fontWeight: '700'}}>{item}</Text>
          </View>
        ))}
      </Animated.View>
    );
  };

  const RenderedType = () => {
    return (
      <Animated.View style={[typeAnimatedStyle, styles.items_container]}>
        {['AM', 'PM'].map((item, index) => (
          <View
            key={index}
            style={[styles.item, {marginTop: index === 0 ? 50 : 0}]}>
            <Text style={{fontSize: 24, fontWeight: '700'}}>{item}</Text>
          </View>
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
    <Modal transparent visible={true}>
      <GestureHandlerRootView style={styles.back_drop}>
        <View style={styles.root}>
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
          <View style={styles.buttons}>
            <Pressable>
              <Text style={styles.btn_txt}>Cancel</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.btn_txt}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
}
