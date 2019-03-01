import React from 'react';
import { StyleSheet, Text, View, Image, ListView} from 'react-native';
import * as RN from 'react-native';

// home ip: 192.168.1.184
// school ip: 173.2.3.176

export default class Library extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoData: null,
            photoApiDataLoaded: false
        }
    }


    componentDidMount() {
        this.fetchPhotos();
    }

    fetchPhotos = (req, res) => {
        fetch(`http://173.2.3.176:3000/users/1/albums/1/photos`)
            .then((res) => res.json())
            .then((data) => {
                // console.log('fetched line 27', data)
                this.setState({
                    photoData: data.photos_data,
                    albumName: data.album,
                    photoApiDataLoaded: true
                })
                // console.log('fetched line 33', data)

            })
            .catch(err => console.log(err))

    }
    renderPhotos = () => {

        console.log(this.state.albumName, "line 35")
        console.log(this.state.photoData, 'after');
        
       return this.state.photoData.map((data, i) => {

            console.log(data.image, "hello");
            return (
                
                <View key={i} style={styles.albumContainer}>
                    <Image source={{ uri:data.image }} style={styles.photo} />
                </View>
            );

        })
    }

    render() {
       
        // console.log('line 60 in render', this.state.photoData)
        return (
            <View style={styles.container}>
                {(this.state.photoApiDataLoaded) ? <View>
                    
                    <Text>{this.state.albumName}</Text>
                    {this.renderPhotos()}

                </View> : <Text>Loading...</Text>}

                
                <RN.Button title="Edit Photo" onPress={() => { this.props.navigation.navigate("EditPhoto")}} />
                <RN.Button title="Albums" onPress={() => { this.props.navigation.navigate("Albums")}} />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    albumContainer: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 100,
        height: 100,
        padding: 10
    },
    albumName: {
        fontSize: 30,
        color: 'white'

    }
});
