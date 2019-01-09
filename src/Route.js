import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Principal from './components/Principal';
import Cadastrar from './components/Cadastrar';
import Login from './components/Login';
import CadastrarUsuario from './components/CadastrarUsuario';
import VerificarUsuario from './components/VerificarUsuario';

export default class Route extends React.Component {
    render() {
        return (
            <CadastrarUsuario />
        );
    }
}

