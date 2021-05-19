import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB42ltnw3nx-wrdRGNl-JMrrmBb-k3mH5M",
    authDomain: "progect-veriskas.firebaseapp.com",
    databaseURL: "https://progect-veriskas-default-rtdb.firebaseio.com",
    projectId: "progect-veriskas",
    storageBucket: "progect-veriskas.appspot.com",
    messagingSenderId: "263566091327",
    appId: "1:263566091327:web:2a1f39b4a1d9c05cc8048a"
};
const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;
const  baseURL = 'https://progect-veriskas-default-rtdb.firebaseio.com/';

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

export const initApi = async () => {
    firebase.initializeApp(firebaseConfig);
}

export const setToken = token => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const removeToken = () => {
    return localStorage.removeItem('token');
}

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
            setToken(idToken);
            window.location.href = '/';
            alert('Ваша корзина с товарами пуста🗑️');
            // header_form.style.display = 'none';   // ? Как сделать, чтоб сначала открыло страницу, а потом нашло форму?
            // createButtonExit();

        } else alert('Уппс...что-то пошло не так, попробуйте еще раз');
    })
}
