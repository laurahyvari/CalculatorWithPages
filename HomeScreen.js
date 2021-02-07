import React, {Component, useRef, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import History from './History';
import App from './App'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





// piilottaa keyboardin
/* const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    { children }
  </TouchableWithoutFeedback>
); 
 */

export default function HomeScreen( { navigation}) {

const [result, setResult] = useState('');
const [operation1, setOperation1] = useState('');
const [operation2, setOperation2] = useState('');

const [data, setData] = useState([]);
const initialFocus = useRef(null);

const calculate = operator => {

  console.log(operation1, operation2, operator);
  const[number1, number2] = [Number(operation1), Number(operation2)];

  if (isNaN(number2)|| isNaN(number2)){

    setResult(0);
  }else{
    let result = 0;

    switch (operator){
      case '+':
      result = number1 + number2;
      break;

      case '-':
        result = number1 - number2;
        break;
    }
    setResult(result);

    const text = `${number1} ${operator} ${number2} = ${result}`;
    setData([...data, {key: text}]);
  }
  setOperation1('');
  setOperation2('');
  initialFocus.current.focus();
}


  return (
    // <DismissKeyboard>
    <View>
     
          
          <View style={styles.container}>
            <Text>LASKIN NATIVE APP</Text>
        
              <Text>Result: {result} </Text>
        
              <TextInput style={styles.input} ref={initialFocus}
              keyboardType={'numeric'}
              onChangeText={text => setOperation1(text)}
              value={operation1}
              />
                <TextInput style={styles.input} ref={initialFocus}
              keyboardType={'numeric'}
              onChangeText={text => setOperation2(text)}
              value={operation2}
              />
              </View>  
        <View style = {styles.buttons}>
          <Button buttonStyle={styles.button} onPress={() => calculate('+')} title = '+'/>
          <Button buttonStyle={styles.button} onPress={() => calculate('-')} title = '-'/>
        
        </View>
                 
  
      <View style={styles.container}>
             
                <FlatList 
              data={data}
              renderItem={({item}) =>
            
               navigation.navigate(key.item) }/>
               
                </View>
    </View> 
  );
}

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
   borderColor: 'black',
   borderWidth: 1,
   padding: 5,
   margin: 5,
   width: '50%'
    
  },
}); 



