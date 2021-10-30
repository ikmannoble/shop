import React from 'react';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

export default function Signup() {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					justifyContent: 'flex-end',
					alignItems: 'flex-start',
					flex: 0.2,
					paddingHorizontal: '5%',
					paddingBottom: '10%',
				}}
			>
				<Text
					style={{
						marginVertical: '2%',
						fontSize: 25,
						color: '#FF8055',
						textAlign: 'center',
						fontWeight: 'bold',
					}}
				>
					Sign up
				</Text>
				<Text style={{ fontSize: 16, color: 'grey', fontWeight: '300' }}>
					Create a new account to access
				</Text>
				<Text style={{ fontSize: 16, color: 'grey', fontWeight: '300' }}>
					thousands of products
				</Text>
			</View>
			<View style={{ flex: 0.8 }}>
				<View style={{ width: '90%', height: '15%', alignSelf: 'center' }}>
					<Text style={{ fontSize: 18 }}>Name</Text>
					<TextInput style={styles.input} placeholder='Enter your name' />
				</View>
				<View style={{ width: '90%', height: '15%', alignSelf: 'center' }}>
					<Text style={{ fontSize: 18 }}>Email</Text>
					<TextInput style={styles.input} placeholder='Enter your email' />
				</View>
				<View style={{ width: '90%', height: '15%', alignSelf: 'center' }}>
					<Text style={{ fontSize: 18 }}>Password</Text>
					<TextInput style={styles.input} placeholder='Enter your password' />
				</View>
				<View style={{ width: '90%', height: '15%', alignSelf: 'center' }}>
					<Text style={{ fontSize: 18 }}>Phone Number</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingRight: '10%',
						}}
					>
						<TextInput
							style={{
								width: '15%',
								borderColor: 'grey',
								borderBottomWidth: 1,
							}}
							placeholder='+1'
						/>
						<TextInput
							style={{
								width: '80%',
								borderColor: 'grey',
								borderBottomWidth: 1,
							}}
							placeholder='Enter your number'
						/>
					</View>
				</View>
				<View style={{ alignItems: 'center', width: '90%' }}>
					<Button title='Sign up' color='#fff' />
				</View>
				<Text style={{ color: 'grey', paddingHorizontal: '5%' }}>
					Already have an account? <Text style={{ color: '#FF8055' }}>Login</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: { width: '90%', borderColor: 'grey', borderBottomWidth: 1 },
});
