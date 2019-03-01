import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { ImagePicker, Permissions } from 'expo';



// https://www.youtube.com/watch?v=IGZCtwpnqC8
// image picker tutorial
export default class EditPhoto extends React.Component {
  state = {
    image: null,
  };
  selectPicture = async () => {
    // setting permissions to access camera roll
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    //setting uri and cancelled (depending whic one is clickec on ) to the image library async
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true
    })
    // setting state to the image that is selected 
   if(!cancelled){ this.setState({ image: uri })}
  }
  takePicture = async () => {
    // setting permissions to access Camera 
    await Permissions.askAsync(Permissions.CAMERA)

    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false
    })
    this.setState({ image: uri })
  }

  render() {
    let { image } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Button title="Gallery" onPress={this.selectPicture}>Gallery</Button>
        <Button title="Camera" onPress={this.takePicture}>Camera</Button>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="Back" onPress={() => { this.props.navigation.navigate("Library")}} />

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
  text: {
    fontSize:15
  },

});