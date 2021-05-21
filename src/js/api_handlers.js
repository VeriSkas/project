import firebase from 'firebase/app';
import {
    firebaseConfig,
    authUrl,
    baseURL
} from './api-config';
import { setLS } from './localSt';
require("firebase/auth");

export const initApi = async () => {
    firebase.initializeApp(firebaseConfig);
}

export const signIn = (email, password) => {
    return fetch(authUrl, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        header: {
            'Content-Type': 'application/json'
        }
    }).then( response => response.json())
};

export const createUser = async (email, password, name, surname, brthData, gender) => {
    const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => console.log(response));

    await fetch( `${baseURL}/users.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, surname, brthData, gender })
    })
    .then(response => response.json())
    .then(result => console.log(result))

    await signIn(email, password).then( ({idToken}) => {
        if(idToken) {
            setLS('token', idToken);
            window.location.href = '/';
            alert('Ваша корзина с товарами пуста🗑️');
        } else alert('Уппс...что-то пошло не так, попробуйте еще раз');
    })
}
