import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HomeScreen, NotificationsScreen } from '../screen'
const Drawer = createDrawerNavigator()

// const App = () => (
//   <Drawer.Navigator
//     // drawerContent={props => <SideBar {...props} />}
//     initialRouteName="Main"
//     drawerStyle={{
//       backgroundColor: 'rgb(255,255,255,.7)',
//       width: '100%'
//     }}
//   >
//     <Drawer.Screen name="Screen1" component={Screen1} />
//   </Drawer.Navigator>
// )

const MainNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
)

export default MainNavigator
