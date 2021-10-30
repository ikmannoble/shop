import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Bottom() {
	return (
		<Tab.Navigator>
			<Tab.Screen name={LOGIN_SCREEN} component={Signin} />
			<Tab.Screen name={SIGNUP_SCREEN} component={Signup} />
			<Tab.Screen name={PRODUCT_SCREEN} component={Products} />
		</Tab.Navigator>
	);
}
