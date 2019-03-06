import React from 'react';
import { Button, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { Asset, ImageManipulator, Expo, MediaLibrary } from 'expo';
// import { PIXI } from 'expo-pixi'
import GestureHandler from 'react-native-gesture-handler';


export default class EditPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      image: ''
    };
  }


  editPhoto = async () => {
    await this.setState({
      ready: true,
      image: this.props.navigation.getParam('image')
    });
  }
  componentDidMount() {
    async () => {
      const image = Asset.fromModule(this.props.image)
      await image.downloadAsync()
    }
    this.editPhoto()
    console.log(`this is to test the async func: ${this.state}`)

  }

  _rotate90 = async () => {
    // {uri:this.props.navigation.getParam('image')}
    try {
      console.log(this.state.image)
      const manipResult = await ImageManipulator.manipulateAsync(
        this.state.image,
        [{ rotate: 90 }],
        { format: 'png' }
      );
      this.setState({ image: manipResult.uri });
    } catch (err) { console.log(err) }
  }
  _flip = async () => {
    // {uri:this.props.navigation.getParam('image')}
    try {
      console.log(this.state.image)
      const manipResult = await ImageManipulator.manipulateAsync(
        this.state.image,
        [{ flip: { horizontal: true } }],
        { format: 'png' }
      );
      this.setState({ image: manipResult.uri });
    } catch (err) { console.log(err) }
  }


  _crop = async () => {
    // {uri:this.props.navigation.getParam('image')}
    try {
      console.log(this.state.image)
      const manipResult = await ImageManipulator.manipulateAsync(
        this.state.image,
        [{ originX: true, originY: true, width: true, height: true }],
        { format: 'jpeg' }
      );
      this.setState({ image: manipResult.uri });
    } catch (err) { console.log(err) }
  }
  finishEdit = async () => {
    MediaLibrary.createAssetAsync(this.state.image)
    .then(() => {
      console.log('image created!');
      this.props.navigation.navigate('Library')
    })
    .catch(error => {
      console.log('err', error);
    });
  }
  _renderImage = () => {

    return (
      <View style={{ marginVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ height: 400, width: 400, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={{ uri: this.state.image }} />
      </View>
    );
  }

  render() {
    //   let image= this.props.navigation.getParam('image');
    console.log(`this is after the update: ${this.state}`)
    return (
      <View style={{ flex: 1 }}>


        <View style={{ padding: 10 }}>
          {this.state.ready ? this._renderImage() : <Text> Not Valid.</Text>}

          <Button title='Rotate' onPress={this._rotate90} style={styles.rotate} />
          <Button title='Flip' onPress={this._flip} style={styles.flip} />
          <Button title='Crop' onPress={this._crop} style={styles.crop} />
          <Button title="Done" onPress={this.finishEdit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rotate: {

  }

});