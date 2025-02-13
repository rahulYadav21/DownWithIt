import {
	View,
	Text,
	SafeAreaView,
	Image,
	Button,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from '../../../styles';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Landing({ navigation }) {
	return (
		<ImageBackground
		style={styles.landingPage}
			source={{
				uri: 'https://asset.gecdesigns.com/img/background-templates/amber-aura-colorful-gradient-background-design-1681464219971-cover.webp',
			}}>
			{/* <SafeAreaProvider style={styles.landingContainer}> */}
			<SafeAreaView style={styles.landingContainer}>
				<View>
					<Image
						style={styles.landingLogo}
						source={require('../../public/logo.png')}
						alt='image not loaded'
					/>
					<TouchableOpacity
						title='new Memes'
						style={styles.landingButton}
						onPress={() => navigation.navigate('Dashboard')}
					>
						<Text style={styles.landingButtonText}>New Memes</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
			{/* </SafeAreaProvider> */}
		</ImageBackground>
	);
}
