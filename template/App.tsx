import React from 'react';
import RootNavigation from './src/navigator/RootNavigation';
import {Provider} from 'react-redux';
import {STORE, presistStore} from './src/utils/STORE';
import {PersistGate} from 'redux-persist/integration/react';
import {AppAlert} from './src/components';
import {AlertRef} from './src/helper';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={STORE}>
      <PersistGate persistor={presistStore}>
        <RootNavigation />
        <AppAlert ref={AlertRef} />
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;
