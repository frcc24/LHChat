import React from "react";
import { StatusBar } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import FormCadastro from "./src/FormCadastro";

import LoginForm from "./src/LoginForm";

const Routes = ()  => {
    return(
    <Router key="router">
        <Stack key="root">
            <Scene key="scene">
            <Scene key="loginForm" component={LoginForm} title="Login" initial /> 
            <Scene key="formCadastro" component={FormCadastro} title="Cadastro" />
            </Scene>
        </Stack>
    </Router>
    );
}
export default Routes;