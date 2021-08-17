import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen, NotificationsScreen, InfoScreen } from '../screens';

const Drawer = createDrawerNavigator();

const BottomTabs = createBottomTabNavigator()

const BottomTabsScreen = () => (
	<BottomTabs.Navigator
	  initialRouteName="Home"
	>
	  <BottomTabs.Screen
		name="Notifications"
		component={NotificationsScreen}
		options={{
		  tabBarLabel: 'Notifications',
		}}
	  />
	  <BottomTabs.Screen
		name="InfoScreen"
		component={InfoScreen}
		options={{
		  tabBarLabel: 'InfoScreen',
		}}
	  />
	</BottomTabs.Navigator>
  )

const MainNavigator = () => (
	<Drawer.Navigator initialRouteName="Home">
		<Drawer.Screen name="Home" component={HomeScreen} />
		<Drawer.Screen name="Notifications" component={BottomTabsScreen} />
	</Drawer.Navigator>
);

export default MainNavigator;
