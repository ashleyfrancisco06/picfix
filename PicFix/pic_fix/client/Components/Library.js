import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Header } from 'react-native';
import * as RN from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


// home ip: 192.168.1.184
// school ip: 173.2.3.176
export default class Library extends React.Component {
    static navigationOptions= {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            photoData: null,
            photoApiDataLoaded: false,
            columns: 0
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
                    photoApiDataLoaded: true,
                    columns: 2
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
                    <Image source={{ uri: data.image }} style={styles.photo} />
                </View>
            );

        })
    }

    render() {
        columns = this.state
        // console.log('line 60 in render', this.state.photoData)
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.wrapper}>

                    {(this.state.photoApiDataLoaded) ?
                        <View style={styles.containertwo}>
                            <Text style={styles.albumname}>{this.state.albumName}</Text>
                            {this.renderPhotos()}
                        </View>
                        : <Text>Loading...</Text>}

                </ScrollView>
            </View>
        );
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
    containertwo:{
            flex: 1,
            flexDirection: 'row',
            width: 450,
            flexWrap: 'wrap',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
    
       
    },
    albumContainer: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: 'black',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 180,
        width: 180,
        padding: 25,
        margin: 10,
        alignItems: 'center',
    },
    albumname: {
        fontSize: 50,
        color: 'black',
        alignItems: 'center',
        padding: 70

    },
    wrapper: {
        alignItems: 'center',
        width: RN.Dimensions.get("screen").width,
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
