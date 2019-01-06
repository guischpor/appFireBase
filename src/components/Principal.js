import React from 'react';
import firebase from 'firebase';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


export default class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pontuacao: 0,
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

    salvarDados() {
        //funcao de criar nós no database
        var funcionarios = firebase.database().ref('funcionarios');
        //database.ref('pontuacao').set('200');

        //esse codigo abaixo cria os nós  filhos.
        //funcionarios.child('002').child("nome").set('Lino');

        //esse codigo abaixo com o metodo push cria automaticamente um id para cada nó filho,.
        //funcionarios.push().child("nome").set('Lino');

        //esse codigo abaixo remove os nós filhos selecionado
        //funcionarios.child('001').remove()

        //Passando um objeto literal para salvar dados
        // funcionarios.push().set(
        //     {
        //         nome: 'Lino Portela',
        //         altura: '1,75',
        //         peso: '77KG'
        //     }
        // );
    }

    // removerDados() {
    //     var database = firebase.database();
    //     database.ref('pontuacao').remove();
    // }
        //função que lista dados ou busca dados
        listarDados() {
            var pontuacao = firebase.database().ref('pontuacao');
            pontuacao.on('value', (snapshot) => {
                var pontos = snapshot.val();
                this.setState({
                    pontuacao:pontos
                });
            });
        }

    render() {
        let {pontuacao} = this.state;

        return (
            
            <View>
                <Text>Botão salvarDados</Text>
                <Button
                    onPress={ () => {this.salvarDados(); }}
                    title='Salvar dados'
                    color='#f15625'
                    accessibilityLabel='Salvar dados'
                />

                {/* <Text>Botão remover Dados</Text>
                <Button
                    onPress={ () => {this.removerDados(); }}
                    title='Remover dados'
                    color='#f15625'
                    accessibilityLabel='Remover dados'
                /> */}

                <Text>Botão Listar Dados</Text>
                <Button
                    onPress={ () => {this.listarDados(); }}
                    title='Listar dados'
                    color='#f15625'
                    accessibilityLabel='Listar dados'
                />
                <Text>{`${pontuacao} pontos`}</Text>
            </View>
        );
    }
}

