import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Box } from '@jv/ui-storybook-mobile-app/basic';
import useDemo from '@framework/demo/use-demo';
import { useUI } from '@ui-hook';

const HomeScreen: React.FC<any> = ({ navigation }) => {
	const { data } = useDemo();
	const [uiState] = useUI<[string, Function]>('uiState')
	return (
		<View style={styles.content}>
			<Text>{data?.hello}</Text>
			<Text>{uiState}</Text>
			<Button onPress={() => navigation.navigate('Notifications')} title={`Go to notifications`} />
			<Box
				bg="primary.400"
				p={4}
				_text={{
					fontSize: 'md',
					fontWeight: 'bold',
					color: 'white',
				}}
			>
				This is a Box
			</Box>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;
