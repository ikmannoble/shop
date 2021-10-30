import React from 'react';
//Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
// screens
import TestScreen from './screens/TestScreen';
import TestScreenSecond from './screens/TestScreenSecond';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Products from './screens/Products';
import { LOGIN_SCREEN, PRODUCT_SCREEN, SIGNUP_SCREEN } from './constants/Constant';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={LOGIN_SCREEN}>
				<Stack.Screen name={LOGIN_SCREEN} component={Signin} />
				<Stack.Screen name={PRODUCT_SCREEN} component={Products} />
				<Stack.Screen name={SIGNUP_SCREEN} component={Signup} />
				{/* <Stack.Screen
					name='test'
					component={TestScreen}
					options={{
						headerStyle: {
							backgroundColor: 'pink',
						},
					}}
				/>
				<Stack.Screen name='second' component={TestScreenSecond} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
