import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TouchID from 'react-native-touch-id';
import { HStack, Input, Text, Button } from '@jv/ui-storybook-mobile-app/basic';
import useMovie from '@framework/demo/use-movie';
import useAddMovie from '@framework/demo/use-add-movie';
import { useUI } from '@ui-hook';

const HomeScreen: React.FC<any> = ({ navigation }) => {
	const { data = [] } = useMovie();
	const [inputText, setInputText] = useState<string>('');
	const mutation = useAddMovie();
	const [uiState] = useUI('uiState');

	const checkTouchId = () => {
		TouchID.isSupported()
			.then((biometryType) => {
				console.log(`biometryType is: ${biometryType}`);
				return TouchID.authenticate().then((success) => {
					console.log(success);
				});
			})
			.catch((error) => {
				console.log(`touch or face ID error: ${error}`);
			});
	};

	const addMovie = () => {
		mutation.mutate({ name: inputText });
	};

	return (
		<View style={styles.content}>
			{/* <Text>{data?.hello}</Text> */}
			<Text>{uiState}</Text>
			<Button onPress={checkTouchId}>TouchID</Button>
			<Button onPress={() => navigation.navigate('Notifications')}>Go to notifications</Button>
			<HStack>
				<Input flex={1} onChangeText={setInputText} />
				<Button onPress={addMovie}>add movie</Button>
			</HStack>
			{data.map((item, index) => (
				<Text key={`${item.name}-${index}`}>{item.name}</Text>
			))}
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
