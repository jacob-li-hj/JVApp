import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from '@jv/ui-storybook-mobile-app';
import NavigationApp from './navigators/index';
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
		<ThemeProvider>
			<ReactQueryProvider>
				<NavigationApp />
			</ReactQueryProvider>
		</ThemeProvider>
	);
};

export default App;
