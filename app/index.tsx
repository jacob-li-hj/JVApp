import React from 'react';
import {LogBox} from 'react-native';
import NavigationApp from './navigator/index';
import ReactQueryProvider from '@providers/react-query-provider';

LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'source.uri should not be an empty string',
  'Invalid props.style key',
  '`setBackgroundColor` is only available on Android',
  'Require cycle:',
  'Possible Unhandled Promise Rejection',
]);

const App = () => {
  return (
    <ReactQueryProvider>
      <NavigationApp />
    </ReactQueryProvider>
  );
};

export default App;
