import firebase from 'firebase';

export async function firebaseConfig() {
    var config = {
        apiKey: "AIzaSyCz7CA-b-vYUuK2IMM8-6V917v-2t7j_0o",
        authDomain: "configuracaofirebasereac-9cfe0.firebaseapp.com",
        databaseURL: "https://configuracaofirebasereac-9cfe0.firebaseio.com",
        projectId: "configuracaofirebasereac-9cfe0",
        storageBucket: "configuracaofirebasereac-9cfe0.appspot.com",
        messagingSenderId: "416651477909"
    };
    firebase = firebase.initializeApp(config);
    return firebase;
}