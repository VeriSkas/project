import { formAuth } from './domVariables';

const apiKey = "AIzaSyB42ltnw3nx-wrdRGNl-JMrrmBb-k3mH5M";

if (window.location.pathname === '/') {
    formAuth.addEventListener('submit', authFormHandler);
}

function authFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    authWithEmailAndPassword(email, password)
        .then(token => checkToken(token))
}

function authWithEmailAndPassword (email, password) {
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then( response => response.json())
        .then( data => data.idToken)
}

function checkToken(tok) {
    if(!tok) {
        return Promise.resolve(alert('Такой пользователь не зарегистрирован!'));
    }
        return Promise.resolve(alert('Ваша корзина с товарами'));
}