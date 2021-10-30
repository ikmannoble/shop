import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProductViewComponents from '../components/ProductViewComponents';
import FilterList from '../components/FilterList';

export default function Products() {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					flex: 0.07,
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%',
					paddingHorizontal: '3%',
				}}
			>
				<View style={{ width: '80%', flexDirection: 'row' }}>
					<View style={{ marginRight: '-10%', width: '10%', paddingTop: '1%' }}>
						<EvilIcons name='search' size={36} color='grey' />
					</View>
					<View style={{ width: '90%' }}>
						<TextInput
							style={{
								borderWidth: 1,
								height: '80%',
								borderColor: 'grey',
								borderRadius: 10,
								width: '100%',
							}}
							place='Search'
						/>
					</View>
				</View>
				<View style={{}}>
					<FontAwesome name='shopping-bag' size={36} color='#FF8055' />
				</View>
			</View>
			<View
				style={{
					flex: 0.1,
					paddingHorizontal: '5%',
				}}
			>
				<FilterList />
			</View>

			<View
				style={{
					flex: 0.8,
					justifyContent: 'space-between',
				}}
			>
				<ProductViewComponents />
			</View>
			<View style={{ flex: 0.1, backgroundColor: 'pink' }}></View>
		</View>
	);
}
