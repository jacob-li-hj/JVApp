import React from 'react'
import { LogBox } from 'react-native'
import NavigationApp from './navigator/index'
import ReactQueryProvider from '@providers/react-query-provider'

require('./mock');

LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'source.uri should not be an empty string',
  'Invalid props.style key',
  '`setBackgroundColor` is only available on Android',
  'Require cycle:',
  'Possible Unhandled Promise Rejection'
])

// global.console = {
//     info: () => {},
//     log: () => {},
//     warn: () => {},
//     debug: () => {},
//     error: () => {},
//     assert: () => {},
//     table: console.table
// }

const App = () => {
  return (
    <ReactQueryProvider>
      <NavigationApp />
    </ReactQueryProvider>
  )
}

export default App
