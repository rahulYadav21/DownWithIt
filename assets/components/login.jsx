import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
	Alert,
	Button,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';
// import styles from './styles';
import styles from '../../styles';

export default function Login() {
	const [text, onChangeText] = React.useState('');

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={styles.topSection}>
						<Image
							style={styles.image}
							source={{
								uri: 'https://i.pinimg.com/474x/df/55/c6/df55c69014677037a004a42d1908bf15.jpg',
							}}
						/>
					</View>
					<View style={styles.bottomSection}>
						<Text style={styles.topText}>Feedback please</Text>
						<Text style={styles.topText}>For RAHUL :)</Text>
						<Text>You want to check my skills..!!</Text>
						<Text>please fill the form .... :)</Text>
						<TextInput
							value={text}
							onChangeText={onChangeText}
							placeholder='Kaisa laga ??'
							style={styles.input}
						/>

						<TextInput
							value={text}
							onChangeText={onChangeText}
							placeholder='do u need see more skills'
							style={styles.input}
						/>

						<TouchableOpacity
							style={styles.button}
							onPress={() =>
								Alert.alert(
									'Sorry Bro.... only positive response allowed you give me bad response fill it again'
								)
							}>
							<Text style={styles.buttonText}>Say Truth only..</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
