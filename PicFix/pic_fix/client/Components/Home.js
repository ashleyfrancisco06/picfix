import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RN from 'react-native';
import axios from "axios"


export default class Home extends React.Component {
  signInFunction = async() => {
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
  
    // await axios.post(`http://173.2.3.176:3000/users`, user)
    // this.props.navigation.navigate("Library")
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Sign Up</Text>
        <RN.TextInput placeholder="Name" onChange={(name) => this.setState({ name })} style={styles.input} />
        <RN.TextInput placeholder="E-mail" onChange={(email) => this.setState({ email })}style={styles.input} />
        <RN.TextInput secureTextEntry={true} placeholder="Password" onChange={(password) => this.setState({ password })} style={styles.input} /> */}


        <RN.Button title="Sign Up" onPress={() => {this.props.navigation.navigate("Library")}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    width: '40%'
  }
});

