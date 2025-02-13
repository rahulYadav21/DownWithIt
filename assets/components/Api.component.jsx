import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, FlatList, Image, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles';

export default function Api() {
	const [image, setImage] = React.useState([]);

	const fetchDogs = () => {
		axios
			.get('https://dog.ceo/api/breeds/image/random')
			.then((resp) =>
				setImage((prevImage) => [...prevImage, resp.data.message])
			)
			.catch((error) => console.error('error on fetch data:- ', error));
	};

	useEffect(() => {
		fetchDogs();
	}, []);

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<Text style={styles.heading}>hello</Text>
				<Text style={styles.headerTitle}>Random dogs</Text>
				<Button
					title='Random dog on click!'
					onPress={fetchDogs}
				/>
				<ScrollView style={styles.ScrollView}>
					<FlatList
						style={styles.imageDisplay}
						data={image}
						numColumns={2}
						keyExtractor={(item, i) => i.toString()}
						renderItem={({ item }) => (
							<Image
								source={{ uri: item }}
								style={styles.imageView}
							/>
						)}
					/>
 				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
