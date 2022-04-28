
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';


const LoginForm = () => {
  
  return (
    <View style={{ flex: 1, padding:10 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize:25, }}> Login LH Chat</Text>
      </View>
      <View style={{ flex: 2,}}>
        
          <TextInput  placeholder='E-mail' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TextInput  placeholder='Senha' style={{ fontSize:20, height: 45 , padding: 10}}/>
          
      </View>
      <View style={{ flex: 2, } }>
        <Button title='Acessar' color='#f00' style={{}} onPress={ ()=> {false}}/>
      </View>
       

    </View>
  );
};


export default LoginForm;
