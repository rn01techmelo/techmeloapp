

import React, { Component } from 'react';
import {
    View, StatusBar, AsyncStorage, TouchableOpacity,  Modal, TextInput,
    FlatList, Text, SafeAreaView, Alert,  Image,
} from 'react-native';
import styles from './styles';


class LoginScreen extends Component {
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

export default LoginScreen;




/**



mysql> call category_hier(1);
+--------+---------------+---------------+----------------------+-------+
| cat_id | category_name | parent_cat_id | parent_category_name | depth |
+--------+---------------+---------------+----------------------+-------+
|      1 | Location      |          NULL | NULL                 |     0 |
|      3 | USA           |             1 | Location             |     1 |
|      5 | Chicago       |             3 | USA                  |     2 |
|      4 | Illinois      |             3 | USA                  |     2 |
+--------+---------------+---------------+----------------------+-------+
4 rows in set (0.00 sec)

mysql> call category_hier(2);
+--------+---------------+---------------+----------------------+-------+
| cat_id | category_name | parent_cat_id | parent_category_name | depth |
+--------+---------------+---------------+----------------------+-------+
|      2 | Color         |          NULL | NULL                 |     0 |
|      6 | Black         |             2 | Color                |     1 |
|      7 | Red           |             2 | Color                |     1 |
+--------+---------------+---------------+----------------------+-------+
3 rows in set (0.00 sec)
 
  open_file = async () => {
   import react-native-fs
    var XMLParser = require('react-xml-parser');
    var filePath = '/storage/emulated/0/android/xmlTest.xml'; //download_fetch_blob.txt
    // readFile(filepath: string, encoding?: string)
    RNFS.readFile(filePath, 'ascii').then(res => {
      console.log('res ' + res);
      var xml = new XMLParser().parseFromString(res);
      console.log(xml);
      // alert(res)
    })
      .catch(err => {
        console.log(err.message, err.code);
      });

  }

 */
