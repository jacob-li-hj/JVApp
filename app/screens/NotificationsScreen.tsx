import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationsScreen: React.FC = () => {
	const { goBack } = useNavigation();
	return (
		<View style={styles.content}>
			<Button onPress={goBack} title="Go back home" />
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

export default NotificationsScreen;
