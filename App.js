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

import Home from './Home';
import Two from './Two';

const App = () => {
  return (

     
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>   
        <NavigationContainer>{
          
        //   {
        //    home: {
        //     screen: Home,
        //   },
        //   two: {
        //     screen: Two,
        //   },
 
        // },{
        //   initialRouteName: "home",
        //   navigationOptions: {
        //     header: null,
        //     headerMode: 'none'
        //   },
        // }
         
          }</NavigationContainer> 
     
        </ScrollView>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
