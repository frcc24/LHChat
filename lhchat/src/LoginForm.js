
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import { Actions } from 'react-native-router-flux'

const LoginForm = () => {
  
  return (
    <View style={{ flex: 1, padding:10 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize:25, }}> Login LH Chat</Text>
      </View>
      <View style={{ flex: 2,}}>
        
          <TextInput  placeholder='E-mail' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TextInput  placeholder='Senha' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TouchableHighlight onPress={ () => Actions.formCadastro() }>
            <Text> Nao tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
          
      </View>
      <View style={{ flex: 2, } }>
        <Button title='Acessar' color='#f00' style={{}} onPress={ ()=> {false}}/>
      </View>
       

    </View>
  );
};


export default LoginForm;
