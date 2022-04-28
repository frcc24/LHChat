
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

const FormCadastro = props => {
  
  return (
    <View style={{ flex: 1, padding:10 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize:25, }}> Cadastro LH Chat</Text>
      </View>
      <View style={{ flex: 2,}}>
        
          <TextInput value={props.email} placeholder='E-mail' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TextInput value={props.nome} placeholder='Nome' style={{ fontSize:20, height: 45 , padding: 10}}/>
          <TextInput value={props.senha} placeholder='Senha' style={{ fontSize:20, height: 45 , padding: 10}}/>
          
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
    nome: state.AutenticacaoReducer.nome,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)  (FormCadastro); 