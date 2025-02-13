import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../styles';

export default function Dashboard() {
	const [data, setData] = useState([]);

	const fetchData = () => {
		axios
			.get('https://api.imgflip.com/get_memes')
			.then((resp) => {
				setData(resp.data.data.memes);
			})
			.catch((error) => console.error('fetch data error:- ', error));
	};
	useEffect(() => {
		fetchData();
	}, []);

	const renderData = ({ item }) => (
		<View style={styles.dataView}>
			<Image
				style={styles.dataImage}
				source={{ uri: item.url }}
			/>
			<Text style={styles.dataText}>{item.name}</Text>
		</View>
	);

	return (
		<View style={styles.dashboardContainer}>
            
			<FlatList
            style={styles.dashboardList}
				data={data}
				renderItem={renderData}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}
