import React from 'react';
import firebase from 'firebase';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableHighlight
} from 'react-native';
import Toast from 'react-native-root-toast';
import {
    firebaseConfig
} from '../actions/MainActions';

export default class CadastrarUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
        }
    }

    componentWillMount() {

        firebaseConfig();

    }
    cadastrarUsuario() {
        var email = this.state.email;
        var senha = this.state.pass;

        if (email.length > 0 && senha.length > 0) {
            const usuario = firebase.auth();
            usuario.createUserWithEmailAndPassword (
                email,
                senha
            ).catch(
                //erro.code, erro.message
                (error) => {
                    var mensagemErro = '';
                    if ( error.code === 'auth/weak-password' ) {
                        mensagemErro = 'A senha precisa ter no mínimo 6 caracteres.';
                    }
                    let toast = Toast.show(mensagemErro, {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.CENTER,
                        shadow: false,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: '#e51f1c',
                    });
                    setTimeout(function () {
                        Toast.hide(toast);
                    }.bind(this), 2000);
                }
            );
        } else {
            let toast = Toast.show('Por favor, Preencha todos os campos...', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0,
                backgroundColor: '#e51f1c',
            });

            setTimeout(function () {
                Toast.hide(toast);
            }.bind(this), 2000);
        }
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Text style={styles.txtTitle}>Cadastrar Usuário</Text>
                <TextInput
                    placeholder='Username'
                    value={this.state.email}
                    style={styles.inputTxt}
                    onChangeText={(email) => this.setState({email: email})}
                    autoCapitalize='none'
                />
                <TextInput
                    placeholder='Password'
                    value={this.state.pass}
                    style={styles.inputTxt}
                    onChangeText={(pass) => this.setState({pass: pass})}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                <View style={styles.Cadastra}>
                    <TouchableHighlight
                            underlayColor={'#057e31'}
                            activeOpacity={0.3}
                            //onPress={ () => {this.cadastrarUsuario() }}
                            onPress={ () => {this.cadastrarUsuario() }}
                            style={{
                                borderRadius: 30,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign:'center',
                                    backgroundColor: '#057e31',
                                    borderRadius: 30,
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    padding: 10,
                                    width: 300,
                                }}
                            >
                                    CADASTRAR USUÁRIO
                            </Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create ({
    containerView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    txtTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    inputTxt: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
        height: 40,
        width: 340,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10
    },

    Cadastra: {
        marginTop: 10
    },

})