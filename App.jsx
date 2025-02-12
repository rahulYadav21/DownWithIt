import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, FlatList, Image, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
// import styles from './styles';
import styles from './styles';
import Login from './assets/components/login';
import axios from 'axios';
import Landing from './assets/components/Landing.component';

export default function App() {
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
				<Landing/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
