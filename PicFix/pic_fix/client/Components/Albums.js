import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RN from 'react-native';

export default class Albums extends React.Component {
    render() {
      return (
        <View style={styles.container}>
         
         <Text>List All Albums</Text>
         <RN.Button title="Back" onPress={() => { this.props.navigation.navigate("Library")}} />

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
  });