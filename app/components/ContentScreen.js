import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView, 
  AsyncStorage,
  Picker
} from "react-native";


export default class ContentScreen extends Component{
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}> chicken</View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> hskzjhuihwhwhguhghgwiugoijoivwshgoijhgowihirgwoigahgoih </Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              // <TouchableOpacity style={styles.buttonContainer}>
              //   <Text style={styles.buttonText} >new Profile </Text>  
              // </TouchableOpacity>               
              
            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 50
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    paddingHorizontal: 10,
    
  },
  button: {
    height: 50,
    backgroundColor: "#FB5A03",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10,
   
  },
  buttonText: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    alignSelf: "center",
    
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#390C0C",
    width:'100%',
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    opacity: 0.8
  }
});

AppRegistry.registerComponent("Register", () => Register);


