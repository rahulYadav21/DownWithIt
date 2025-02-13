import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Details from './Details';

const Stack = createStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
				/>
				<Stack.Screen
					name='Details'
					component={Details}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
