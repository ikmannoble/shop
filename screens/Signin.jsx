import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Button,
} from 'react-native';
import { SIGNUP_SCREEN, LOGIN_SCREEN, PRODUCT_SCREEN } from '../constants/Constant';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Signin(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					flex: 0.13,
					justifyContent: 'space-between',
					paddingHorizontal: '5%',
				}}
			>
				<Text style={styles.heading}>Sign in</Text>
				<Text style={styles.subHeading}>
					Sign in to your account to access thousands of products.
				</Text>
			</View>

			<View style={{ flex: 0.4, marginTop: '10%', paddingHorizontal: '5%' }}>
				<Text style={{ fontSize: 22, fontWeight: '400' }}>Email</Text>
				<TextInput
					style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', fontSize: 16 }}
					placeholder='Enter your email'
				/>

				<Text style={{ fontSize: 22, fontWeight: '400', marginTop: '10%' }}>Password</Text>
				<TextInput
					style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', fontSize: 16 }}
					placeholder='Enter your email'
					secureTextEntry
				/>
				<Text style={{ textAlign: 'right', paddingTop: '5%' }}>Forgot password?</Text>
			</View>
			<View style={{ flex: 0.15, paddingHorizontal: '5%' }}>
				<TouchableOpacity
					style={{ backgroundColor: '#FF8055', paddingVertical: 10, borderRadius: 5 }}
					title='navigate to second screen'
					onPress={() => {
						props.navigation.navigate(PRODUCT_SCREEN);
					}}
				>
					<Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>sign in</Text>
				</TouchableOpacity>
			</View>
			<View style={{ paddingHorizontal: '5%' }}>
				<Text style={styles.subHeading}>Connect with us</Text>
			</View>
			<View
				style={{
					alignItems: 'flex-end',
					flexDirection: 'row',
					paddingHorizontal: '5%',
					marginTop: '3%',
				}}
			>
				<Image source={require('../assets/images/fb.png')} style={{ marginLeft: '1%' }} />
				<Image source={require('../assets/images/instagram.jpeg')} style={{ marginLeft: '1%' }} />
				<Image source={require('../assets/images/tw.png')} style={{ marginLeft: '1%' }} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	heading: { fontSize: 24, fontWeight: 'bold', color: '#FF8055' },
	subHeading: { fontSize: 16, fontWeight: '500', color: 'grey' },
});
