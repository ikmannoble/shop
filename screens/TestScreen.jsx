import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TestScreen(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'red' }}>
			<Text style={{ fontSize: 30 }}>Testing</Text>
			<Button
				title='navigate to second screen'
				onPress={() => {
					props.navigation.navigate('second');
				}}
			/>
		</View>
	);
}
