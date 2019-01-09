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

export default class VerificarUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
        }
    }

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCz7CA-b-vYUuK2IMM8-6V917v-2t7j_0o",
            authDomain: "configuracaofirebasereac-9cfe0.firebaseapp.com",
            databaseURL: "https://configuracaofirebasereac-9cfe0.firebaseio.com",
            projectId: "configuracaofirebasereac-9cfe0",
            storageBucket: "configuracaofirebasereac-9cfe0.appspot.com",
            messagingSenderId: "416651477909"
        };

        firebase.initializeApp(config);

    }
    verificaUsuario() {
        var login = this.state.login;
        var pass = this.state.pass;

        if (login.length > 0 && pass.length > 0 ) {

            const usuario = firebase.auth();
            const usuarioAtual = usuario.currentUser;

            if ( usuarioAtual ) {
                let toast = Toast.show('Usuário está logado...', {
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
            } else {
                let toast = Toast.show('Usuário não está logado...', {
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
                <Text style={styles.txtTitle}>Verificar Usuário</Text>
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
                            onPress={ () => {this.verificaUsuario() }}
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
                                    width: 220,
                                }}
                            >
                                    VERIFICAR USUÁRIO
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