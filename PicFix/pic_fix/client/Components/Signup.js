import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RN from 'react-native';
import { Font, LinearGradient } from 'expo';


export default class Signup extends React.Component {
  state = {
    fontLoaded: false,
  };

  signInFunction = async () => {
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    // await axios.post(`http://173.2.3.176:3000/users`, user)
    // this.props.navigation.navigate("Library")
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Pacifico-Regular': require('../assets/fonts/Pacifico-Regular.ttf'),
      'Laila-Regular': require('../assets/fonts/Laila-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }



  render() {
    let title = this.state.fontLoaded ? (

      <Text style={{ fontFamily: 'Pacifico-Regular', fontSize: 85, backgroundColor: 'transparent', color: 'white' }}>
        PicFix
      </Text>
    ) : null
    return (

      <View style={{
        width: RN.Dimensions.get("window").width,
        height: RN.Dimensions.get("window").height,
        flex: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <LinearGradient
          colors={['#086375', '#3CDBD3', '#00FFF5']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5,
          width: RN.Dimensions.get("window").width,
          height: RN.Dimensions.get("window").height,}}>

          {title}

          <Text>Sign Up</Text>
          <RN.TextInput placeholder="Name" onChange={(name) => this.setState({ name })} style={styles.input} />
          <RN.TextInput placeholder="E-mail" onChange={(email) => this.setState({ email })} style={styles.input} />
          <RN.TextInput secureTextEntry={true} placeholder="Password" onChange={(password) => this.setState({ password })} style={styles.input} />
          <RN.Button title="Sign Up" style={styles.button} onPress={() => { this.props.navigation.navigate("Library") }} />

          <Text> Already a member?</Text>
          <RN.Button title="Login" style={styles.button} onPress={()=> {this.props.navigation.navigate("Login")}} />
   
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '50%',
    height: '4%',
    margin:5,
    borderRadius: 5,
    color: 'white'
  },
  button: {
    color: "white"
  }
});

