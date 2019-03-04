import React from 'react';
import { StyleSheet, Text, View, Image, ListView, ScrollView, FlatList, ListItem } from 'react-native';
import * as RN from 'react-native';

// home ip: 192.168.1.184
// school ip: 173.2.3.176
// ztarbucks ip: 172.31.98.233

export default class Library extends React.Component {
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
            <ScrollView loop={false}
                index={0}
                contentContainerStyle={styles.wrapper}>

                {(this.state.photoApiDataLoaded) ?
                    <View style={styles.container}>
                        <Text style={styles.albumname}>{this.state.albumName}</Text>
                       {this.renderPhotos()}
                    </View>
                    : <Text>Loading...</Text>}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 450,
        height: 600,
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
        padding:25,
        margin:10,
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
        width: RN.Dimensions.get("window").width,
        height: RN.Dimensions.get("window").height,
    }
});