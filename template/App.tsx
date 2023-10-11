import React from 'react';
import RootNavigation from './src/navigator/RootNavigation';
import {Provider} from 'react-redux';
import {STORE, presistStore} from './src/utils/STORE';
import {PersistGate} from 'redux-persist/integration/react';
import {AppAlert} from './src/components';
import {AlertRef} from './src/helper';
import Toast from 'react-native-toast-message';
import {ColorSchemeProvider} from './src/utils/ColorScheme';
import {dark_Colors, light_Colors} from './src/constants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={STORE}>
      <PersistGate persistor={presistStore}>
        <GestureHandlerRootView style={{flex: 1}}>
          <ColorSchemeProvider
            lightColors={light_Colors}
            darkColors={dark_Colors}>
            <RootNavigation />
            <AppAlert ref={AlertRef} />
            <Toast />
          </ColorSchemeProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
