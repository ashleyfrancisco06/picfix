import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import * as RN from 'react-native';

// home ip: 192.168.1.184
// school ip: 173.2.3.176
export default class SelectAlbum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoData: null,
            photoApiDataLoaded: false,
            albumName: '',
            columns: 0
        }
    }
    renderAlbum = () => {

        return this.state.photoData.map((photo, i) => {
            return (
                <View key={i} style={styles.albumContainer}>

                    <Image source={{ uri: photo.image }} style={styles.photo} />
                {console.log(photo.image, "line 23")}
                </View>
            )
        })
    }
    componentDidMount() {
        // this.fetchAlbum()
        this.fetchPhotos()
    }
   
    fetchPhotos = (req, res) => {
        console.log(this.props)
        albumId = this.props.navigation.getParam('albumId')
        fetch(`http://1173.2.3.176:3000/users/1/albums/${albumId}/photos`)
            .then((res) => res.json())
            .then((data) => {
                console.log('fetched line 55', data)
                this.setState({
                    photoData: data.photos_data,
                    albumName: data.album,
                    photoApiDataLoaded: true,
                    columns: 2
                })
                // console.log('fetched line 33', data)

            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                
                <Text style={styles.albumname}> {this.state.albumName}</Text>
                {(this.state.photoApiDataLoaded) ?  this.renderAlbum() : null}
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 450,
        flexWrap: 'wrap',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo:{
        height:200,
        width:200,
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 180,
        width: 180,
        padding: 25,
        margin: 10,
        alignItems: 'center',
    },
    wrapper: {
        alignItems: 'center',
        width: RN.Dimensions.get("screen").width,
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    albumname: {
        fontSize: 50,
        color: 'black',
        alignItems: 'center',
        padding: 70

    },
  });