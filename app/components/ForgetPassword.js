import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTitleStyle: {
      textAlign:'left', 
      alignSelf:'center',
      flex:1
    },
    headerTintColor: '#fff',
  };

  onForgetPress() {
        this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onForgetPress.bind(this)}
        >
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
        <TextInput
            value={this.state.phone}
            keyboardType = 'numeric'
            onChangeText={phone => this.setState({ phone })}
            ref={input => (this.phoneInput = input)}
            value={this.state.phone}
            maxLength={10}
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.serviceInput.focus()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 100
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#FB5A03",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
});
