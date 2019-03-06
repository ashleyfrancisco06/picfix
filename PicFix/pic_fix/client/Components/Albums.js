import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as RN from 'react-native';


export default class Albums extends React.Component {
  constructor() {
    super()
    this.state = {
      albumData: [],
      albumAPIDataLoaded: false,
      columns: 0
    }
  }
  componentDidMount() {
    this.fetchAlbums()
  }

  fetchAlbums = (req, res) => {
    fetch(`http://173.2.3.176:3000/users/1/albums/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          albumData: data.album_data,
          albumApiDataLoaded: true,
          columns: 2
        })

      })
      .catch(err => console.log(err))
  }
  renderAlbums = () => {
    return this.state.albumData.map((album, i) => {
      return (
        <View key={i} style={styles.albumContainer}>
          <Button title={album.name} onPress={()=> {this.props.navigation.navigate("SelectAlbum", {albumId: album.id})}} />
        </View>
      )
    })
  }
  render() {

    return (
      <View style={styles.container}>

        <Text>Albums</Text>
        {(this.state.albumData) !== [] ?
           (this.renderAlbums()) : <Text> NOPE</Text>}


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
});