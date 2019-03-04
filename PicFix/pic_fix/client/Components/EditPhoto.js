import React from 'react';
import { Button, TouchableOpacity, Text, View, Image } from 'react-native';
import { Asset, ImageManipulator } from 'expo';


export default class ImageManipulatorSample extends React.Component {
  state = {
    ready: false,
    image: '',
  };

  componentDidMount() {
    
    //   const image = Asset.fromModule(this.props.image);
    //    let imageDownload = image.downloadAsync();
      this.setState({
        ready: true,
        image: this.props.navigation.getParam('image')
      });
   
  }

  render() {
    //   let image= this.props.navigation.getParam('image');
    console.log(this.state.image)
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Button onPress={this._rotate90andFlip} title="" />
         {this.state.image !== '' ? <Image style={{height:400, width:400, justifyContent:'center', alignItems:'center'}} source={{uri:this.state.image}} title="" /> : <Text> Not Valid.</Text>}
         
        </View>
      </View>
    );
  }

  _rotate90andFlip = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      this.props.image,
      [{ rotate: 90}, { flip: { vertical: true }}],
      { format: 'jpg' }
    );
    this.setState({ image: manipResult });
  }

  _renderImage = () => {
    return (
      <View style={{marginVertical: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{ uri: this.props.image}}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
      </View>
    );
  };
}