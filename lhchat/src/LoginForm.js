
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

const LoginForm = props => {
  console.log(props);
  return (
    <View style={{ flex: 1, padding:10 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize:25, }}> Login LH Chat</Text>
      </View>
      <View style={{ flex: 2,}}>
        
          <TextInput value={props.email} placeholder='E-mail' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TextInput value={props.senha} placeholder='Senha' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TouchableHighlight onPress={ () => Actions.formCadastro() }>
            <Text> Nao tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
          
      </View>
      <View style={{ flex: 2, } }>
        <Button title='Acessar' color='#f00' style={{}} onPress={ ()=> {false}}/>
      </View>
       

    </View>
  );
}

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)  (LoginForm); 
