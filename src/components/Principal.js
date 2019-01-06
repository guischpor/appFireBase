import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class Route extends React.Component {
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

    render() {
        return (
            <View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
}

