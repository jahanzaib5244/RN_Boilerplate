/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  setJSExceptionHandler,
  getJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {showAlert} from './src/helper';

setJSExceptionHandler((error, isFatal) => {
  showAlert({title: error.name, message: error.message});
  console.log(isFatal);
  // This is your custom global error handler
  // You do stuff like show an error dialog
  // or hit google analytics to track crashes
  // or hit a custom api to inform the dev team.
}, false);

setNativeExceptionHandler(exceptionString => {
  // This is your custom global error handler
  // You do stuff likehit google analytics to track crashes.
  // or hit a custom api to inform the dev team.
  //NOTE: alert or showing any UI change via JS
  //WILL NOT WORK in case of NATIVE ERRORS.
});

AppRegistry.registerComponent(appName, () => App);
