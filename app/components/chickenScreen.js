

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class chickenScreen extends Component { 

  render() {
    return (
      <ScrollView style={{backgroundColor:"#fff"}}>
      <View style={styles.container}>
          <View style={styles.header}></View>
    
          <View style={styles.body}>
            <View style={styles.bodyContent}>
    
              
              <Text style={styles.description}>will your chickne be healthy use farmia to ensure that </Text>
              
                           
              
            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#fff",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#390C0C",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#390C0C",
    marginTop:10
  },
  description:{
    backgroundColor: "#fff",
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonText:{
    color: "#FFFF",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#fff",
  },
  container:{
    backgroundColor: "#fff",
  }
});