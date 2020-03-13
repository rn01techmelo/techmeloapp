

import React, { Component } from 'react';
import {
  View, StatusBar, AsyncStorage, TouchableOpacity,  Modal, TextInput,
  FlatList, Text, SafeAreaView, Alert,  Image,
} from 'react-native';
import styles from './styles';


class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLogin:false,
    }

  }

  

  static navigationOptions = {
    headerShown: false
  }


  navigate1(screen) {

    this.props.navigation.navigate(screen);
  }

  async componentDidMount() {
      this.setState({isLogin:false});
   
    }



  ask_login = async () => {
    Alert.alert(
      'Login',
      'Do you want to Login it ?',
      [
        { text: 'Home', onPress: () => this.navigate1('home'), style: 'cancel' },
      //  { text: 'Yes', onPress: () => this.delete_files() },
      ],
      // { cancelable: false }
    );

  }


render() {

    return (
      <View style={styles.container}>
        <View style={styles.body}>
      
        <TouchableOpacity style={styles.greyButtonH10W50} onPress={()=>this.ask_login()}>
            <Text style={styles.greyButtonH10W50Text}>Go Home</Text>
        </TouchableOpacity>
     
        </View>
      </View>
    );
}

}

export default HomeScreen;





