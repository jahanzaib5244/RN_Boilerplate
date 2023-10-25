import {View, Text} from 'react-native';
import React from 'react';
import {translate} from 'src/locales/i18next';
import {useColorScheme} from 'src/utils/ColorScheme';
import {AppButton, AppScreen, AppText, ThemeButton} from 'src/components';
import {RunToast, Width, showAlert} from 'src/helper';

const OnBoard = () => {
  const {colors} = useColorScheme();
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
        <AppButton
          title="Hello Alert"
          onPress={() => showAlert({title: 'alert', message: 'message'})}
        />
        <AppButton
          title="Hello toast"
          onPress={() => RunToast({title: 'hello', subTitle: 'hello toast'})}
        />
        <ThemeButton />
      </View>
    </AppScreen>
  );
};

export default OnBoard;
