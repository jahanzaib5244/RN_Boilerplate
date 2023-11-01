import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {translate} from 'src/locales/i18next';
import {useColorScheme} from 'src/utils/ColorScheme';
import {
  AppButton,
  AppDropdown,
  AppInput,
  AppScreen,
  AppText,
  BottomSheet,
  ThemeButton,
  TimePicker,
} from 'src/components';
import {RunToast, Width, height, showAlert, width} from 'src/helper';
import {BottomSheetHandler} from 'src/components/BottomSheet/interface';

const OnBoard = () => {
  const {colors} = useColorScheme();
  const bottomsheetRef = useRef<BottomSheetHandler>(null);

  const [email, setemail] = useState('');

  return (
    <AppScreen
      safeAreaEdges={['bottom', 'top']}
      contentContainerStyle={{flex: 1}}
      preset="fixed"
      style={{backgroundColor: colors?.white}}>
      {/* <AppHeader title="Home" showLeftButton={false} /> */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <AppText
          style={{
            fontSize: Width(22),
            fontWeight: '700',
            color: colors?.black_text,
          }}>
          {translate('greeting')}
        </AppText>
        <AppInput
          label="Email Address"
          onChangeText={e => setemail(e)}
          style={{width: width * 0.9}}
          value={email}
        />
        <AppButton
          title="Hello Alert"
          onPress={() => showAlert({title: 'alert', message: 'message'})}
        />
        <AppButton
          title="Hello toast"
          onPress={() => RunToast({title: 'hello', subTitle: 'hello toast'})}
        />
        <ThemeButton />

        <AppDropdown
          items={Array(5)
            .fill(0)
            .map((_, index) => `item ${index + 1}`)}
          placeholder="Select item..."
        />
        <AppButton
          title="Open Bottom sheet"
          onPress={() => bottomsheetRef.current?.toggle()}
        />
        <BottomSheet height={height * 0.5} ref={bottomsheetRef}>
          <View style={{flex: 1, backgroundColor: colors?.black_text}} />
        </BottomSheet>
      </View>
    </AppScreen>
  );
};

export default OnBoard;
