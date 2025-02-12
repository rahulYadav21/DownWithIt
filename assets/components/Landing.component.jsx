import { View, Text, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../../styles';

export default function Landing() {
	return (
		<SafeAreaProvider style={styles.landingContainer}>
			<SafeAreaView>
				<View>
					<Image
						style={styles.landingLogo}
						source={require('../public/logo.png')}
						alt='image not loaded'
					/>
					<Button title='new Memes' style={styles.landingButton}/>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
