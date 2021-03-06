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
import Toast from 'react-native-root-toast'
import {
    firebaseConfig
} from '../actions/MainActions';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
        }
    }

    componentWillMount() {

        firebaseConfig();

    }

    verificaUsuario() {
        const usuario = firebase.auth();
        usuario.onAuthStateChanged(
            (usuarioAtual) => {
                if ( usuarioAtual ) {
                    let toast = Toast.show('Usuário está logado...', {
                        duration: 2000,
                        position: Toast.positions.CENTER,
                        shadow: false,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: '#e51f1c',
                    });
                } else {
                    let toast = Toast.show('Usuário não está logado...', {
                        duration: 2000,
                        position: Toast.positions.CENTER,
                        shadow: false,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: '#e51f1c',
                    });
                }
            }
        );
    }

    loginUsuario() {

        const {login, pass} = this.state;

        if (login.length > 0 && pass.length > 0 ) {

            const usuario = firebase.auth();
            usuario.signInWithEmailAndPassword(
                login,
                pass
            ).catch(
                (erro) => {
                    let toast = Toast.show(erro.message , {
                        duration: 2000,
                        position: Toast.positions.CENTER,
                        shadow: false,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: '#e51f1c',
                    });
                }
            );
        } else {
            let toast = Toast.show('Por favor, Preencha todos os campos...', {
                duration: 2000,
                position: Toast.positions.CENTER,
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0,
                backgroundColor: '#e51f1c',
            });
        }
    }

    logoutUsuario() {
        const usuario = firebase.auth();
        usuario.signOut();
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Text style={styles.txtTitle}>Login</Text>
                <TextInput
                    placeholder='Username'
                    value={this.state.login}
                    style={styles.inputTxt}
                    autoCapitalize='none'
                    onChangeText={(login) => this.setState({login: login})}
                />
                <TextInput
                    placeholder='Password'
                    value={this.state.pass}
                    style={styles.inputTxt}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={(pass) => this.setState({pass: pass})}
                />
                <View style={styles.Cadastra}>
                    <TouchableHighlight
                            underlayColor={'#057e31'}
                            activeOpacity={0.3}
                            onPress={ () => {this.loginUsuario() }}
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
                                    width: 200,
                                }}
                            >
                                    SIGN IN
                            </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.btnLogout}>
                    <TouchableHighlight
                            underlayColor={'#e51f1c'}
                            activeOpacity={0.3}
                            onPress={ () => {this.logoutUsuario() }}
                            style={{
                                borderRadius: 30,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign:'center',
                                    backgroundColor: '#e51f1c',
                                    borderRadius: 30,
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    padding: 10,
                                    width: 200,
                                }}
                            >
                                    LOGOUT
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

    btnLogout: {
        marginTop: 10
    },

    Cadastra: {
        marginTop: 10
    },

})