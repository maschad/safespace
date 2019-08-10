import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import './src/common/utils/shims';
import { name as appName } from './app.json';
import { firebaseService } from './src/firebase/service';

firebaseService.load('3QjTdcZn6Hb8GEyTfaTA').then(item => {
  global.console.log('item', item)
})

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Module RCTImageLoader',
  'Class RCTCxxModule was not exported',
  'Remote debugger'
]);

AppRegistry.registerComponent(appName, () => App);
