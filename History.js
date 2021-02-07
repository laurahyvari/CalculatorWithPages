import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';
 



// History

export default function History({route, navigation}) {

  const{data} = route.params;
  
 
  
 
    return (
     <View>
        <Text>History</Text>
        <Text>{item.key}</Text>  
       
      

</View>
    );
}; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      
    },
    input: {
    borderColor:'black',
    borderWidth: 2,

      
    },
  });