import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RN from 'react-native';

export default class EditPhoto extends React.Component {
    render() {
      return (
        <View style={styles.container}>
         
         <Text>Edit Your Photo</Text>
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