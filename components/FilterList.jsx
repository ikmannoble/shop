import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const filter = [
	{ id: 1, title: ' Best Match' },
	{ id: 2, title: ' Top Rated' },
	{ id: 3, title: ' Price Low-High' },
	{ id: 4, title: ' Price High-Low' },
	{ id: 5, title: ' Free Delivery' },
	{ id: 6, title: ' Flexible Payment' },
];

export default function FilterList() {
	return (
		<FlatList
			data={filter}
			keyExtractor={(item) => item.id}
			horizontal={true}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity>
						<Text
							style={{
								color: '#FF8055',
								fontSize: 20,
								fontWeight: 'bold',
								paddingHorizontal: 20,
							}}
						>
							{item.title}
						</Text>
					</TouchableOpacity>
				);
			}}
		/>
	);
}
