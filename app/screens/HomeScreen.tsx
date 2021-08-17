import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Box } from '@jv/ui-storybook-mobile-app/basic';
import { Icon } from '@jv/ui-storybook-mobile-app'
import useDemo from '@framework/demo/use-demo';

const HomeScreen: React.FC<any> = ({ navigation }) => {
	const { data } = useDemo();
	return (
		<View style={styles.content}>
			<Text>{data?.hello}</Text>
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
