import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Library extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiData: null,
            apiDataLoaded: false,
            photoData: null,
            photoApiDataLoaded: false
        }
    }


    componentDidMount() {
        this.fetchPhotos();
        this.fetchAlbums();

    }
    fetchAlbums = (req, res) => {
        fetch(`http://173.2.3.176:3000/users/1/albums`)
            .then((res) => res.json())
            .then((data) => {
                console.log('fetched line 24', data)
                this.setState({
                    apiData: data.album_data,
                    apiDataLoaded: true,
                })
            })
            .catch(err => console.log(err))
    }
    fetchPhotos = (req, res) => {
        fetch(`http://173.2.3.176:3000/users/1/albums/1/photos`)
            .then((res) => res.json())
            .then((data) => {
                console.log('fetched line 27', data)
                this.setState({

                    photoData: data.photos_data,
                    photoApiDataLoaded: true
                })
                console.log('fetched line 33', data)

            })
            .catch(err => console.log(err))
            
    }
    


   
    render() {
               {(this.state.apiDataLoaded && this.state.photoApiDataLoaded) ?  
                photos = this.state.apiData.map((album, i) => {
           return  this.state.photoData.map((photo, i) => {
                 console.log('photo', photo)
                 return (
                    <View key = {i} style={styles.albumContainer}>
                         <Text style={styles.albumName}>{album.name}</Text>  
                         <Image source={{uri: photo.image}} style={{ width: 25,
        height: 25}} />
                     </View>
                 );
 
             })
                }) : <Text>Loading...</Text>
         }
        console.log('line 60 in render', this.state.photoData)
       let photos;
        
        return (
            <View style={styles.container}>

                {photos}

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
    albumContainer:{
        flex: 1,
        width: 300,
        height:100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo:{
        flex:1,
       width:200,
       height:200,
        padding: 10
    },
    albumName:{
        fontSize: 30,
        color: 'white'

    }
});
