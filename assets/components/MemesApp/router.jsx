import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Home';
// import Details from './Details';
import Dashboard from './Dashboard';
import Landing from './Landing.component';

const Stack = createStackNavigator();

export default function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Landing}
				/>
				<Stack.Screen
					name='Dashboard'
					component={Dashboard}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
