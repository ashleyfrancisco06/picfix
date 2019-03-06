import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ListView } from 'react-native';
import { ImagePicker, Permissions, Asset, ImageManipulator } from 'expo';


// https://www.youtube.com/watch?v=IGZCtwpnqC8
// image picker tutorial
export default class EditOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      ready: false
    };
  }
  selectPicture = async () => {
    // setting permissions to access camera roll
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    //setting uri and cancelled (depending whic one is clickec on ) to the image library async
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true
    })
    // setting state to the image that is selected 
    this.setState({ image: uri })
  }
  takePicture = async () => {
    // setting permissions to access Camera 
    await Permissions.askAsync(Permissions.CAMERA)

    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: true
    })
    this.setState({ image: uri })
  }


  render() {
    let { image } = this.state;
    console.log(this.state.image)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <View style={styles.listContainer}>
          <Button title="Gallery" onPress={this.selectPicture}>Gallery</Button>
          <Button title="Camera" onPress={this.takePicture}>Camera</Button>
          <Button title="Edit" onPress={() => { this.props.navigation.navigate("EditPhoto", image = { image }) }} />
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15
  },
  listContainer:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});