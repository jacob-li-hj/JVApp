import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

enableScreens();
const ModalStack = createStackNavigator();

const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator
      // headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        ...TransitionPresets.ModalTransition,
      }}>
      <ModalStack.Screen name="Main" component={MainNavigator} />
    </ModalStack.Navigator>
  );
};

const NavigationApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ModalStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationApp;

//  import {
//    LearnMoreLinks,
//  } from 'react-native/Libraries/NewAppScreen';

//  const App: () => React.ReactNode = () => {

//    return (
//      <SafeAreaView >
//        <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
//        <ScrollView contentInsetAdjustmentBehavior="automatic">
//          <View>
//             <Text>123</Text>
//            <LearnMoreLinks />
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    );
//  };
