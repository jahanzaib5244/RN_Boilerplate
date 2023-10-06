import React from 'react';
import RootNavigation from './src/navigator/RootNavigation';
import {Provider} from 'react-redux';
import {STORE, presistStore} from './src/utils/STORE';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={STORE}>
      <PersistGate persistor={presistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
