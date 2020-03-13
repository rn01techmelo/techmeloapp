/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './res/screens/HomeScreen';
import LoginScreen from './res/screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
   
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
              <Stack.Screen name="home" component={HomeScreen} />
              <Stack.Screen name="login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer> 

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
