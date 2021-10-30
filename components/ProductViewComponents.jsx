import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const productData = [
	{
		id: '1',
		name: 'Nike Air',
		imageUrl: require('../assets/images/green_sneakers.jpeg'),
		price: '₦28,999',
	},
	{
		id: '2',
		name: 'All stars',
		imageUrl: require('../assets/images/sneakers.jpeg'),
		price: '₦20,999',
	},
	{
		id: '3',
		name: 'Nike Air',
		imageUrl: require('../assets/images/white_sneakers1.jpeg'),
		price: '₦32,999',
	},
	{
		id: '4',
		name: 'Nike pro',
		imageUrl: require('../assets/images/white_sneakers.jpeg'),
		price: '₦24,699',
	},
	{
		id: '5',
		name: 'Puma',
		imageUrl: require('../assets/images/stylish_sneakers.jpeg'),
		price: '₦35,999',
	},
	{
		id: '6',
		name: 'Nike',
		imageUrl: require('../assets/images/red_nike.jpeg'),
		price: '₦29,999',
	},
	{
		id: '7',
		name: 'Nike Air max',
		imageUrl: require('../assets/images/nike.jpeg'),
		price: '₦37,999',
	},
	{
		id: '8',
		name: 'Nike',
		imageUrl: require('../assets/images/stilettos.jpeg'),
		price: '₦25,999',
	},
	{
		id: '9',
		name: 'Nike Air',
		imageUrl: require('../assets/images/green_sneakers.jpeg'),
		price: '₦28,999',
	},
	{
		id: '10',
		name: 'All stars',
		imageUrl: require('../assets/images/beach_sneakers.jpeg'),
		price: '₦20,999',
	},
	{
		id: '11',
		name: 'Nike Air',
		imageUrl: require('../assets/images/white_sneakers1.jpeg'),
		price: '₦32,999',
	},
	{
		id: '12',
		name: 'Nike pro',
		imageUrl: require('../assets/images/white_sneakers.jpeg'),
		price: '₦24,699',
	},
	{
		id: '13',
		name: 'Puma',
		imageUrl: require('../assets/images/stylish_sneakers.jpeg'),
		price: '₦35,999',
	},
	{
		id: '14',
		name: 'Nike',
		imageUrl: require('../assets/images/red_nike.jpeg'),
		price: '₦29,999',
	},
	{
		id: '15',
		name: 'Nike Air max',
		imageUrl: require('../assets/images/nike.jpeg'),
		price: '₦37,999',
	},
	{
		id: '16',
		name: 'Nike',
		imageUrl: require('../assets/images/stilettos.jpeg'),
		price: '₦25,999',
	},
];

export default function ProductViewComponents() {
	return (
		<FlatList
			data={productData}
			keyExtractor={(item) => item.id}
			numColumns={2}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity
						style={{
							width: '48%',
							backgroundColor: 'white',
							shadowColor: '#000',
							borderRadius: 10,
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 5,
							},
							shadowOpacity: 0.36,
							shadowRadius: 6.68,

							elevation: 11,
							paddingBottom: '5%',
							margin: '0.5%',
						}}
					>
						<View style={{ width: '100%' }}>
							<Image
								source={item.imageUrl}
								resizeMode='cover'
								style={{ width: '100%', height: 200 }}
							/>
						</View>
						<View style={{}}>
							<Text
								style={{ color: 'black', fontSize: 20, fontWeight: '900', paddingHorizontal: '5%' }}
							>
								{item.name}
							</Text>
							<Text
								style={{
									color: 'black',
									fontSize: 20,
									fontWeight: 'bold',
									paddingHorizontal: '5%',
								}}
							>
								{item.price}
							</Text>
						</View>
					</TouchableOpacity>
				);
			}}
		/>
	);
}
