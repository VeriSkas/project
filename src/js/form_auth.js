import { formSignUp, formAuth, header_form } from './domVariables';
import {
    signIn,
    initApi,
    createUser,
    getToken,
    setToken
} from './api_handlers.js';
import {
    englishLetters,
    russianLetters,
    checkForUnacceptableSymbols,
} from './validation';
import { createButtonExit } from './createElement';
require("firebase/auth");

window.onload = () => {
    initApi();

    if (window.location.pathname === '/') {
        formAuth.addEventListener('submit', event => {
            const email = document.querySelector('.email').value;
            const password = document.querySelector('.password').value;
            event.preventDefault();
            signIn(email, password).then( ({idToken}) => {
                if(idToken) {
                    setToken(idToken);
                    alert('Ваша корзина с товарами пуста🗑️');
                    header_form.style.display = 'none';
                    createButtonExit();

                } else alert('Такой пользователь не зарегистрирован!');
            });
        });
    }

    if(
        window.location.pathname === '/index2.html' &&
        !getToken()
    ) {
        alert('Пожалуйста, сначала зарегистрируйтесь или войдите в личный кабинет!');
        window.location.href = '/'
    }

    if(window.location.pathname === '/' && window.location.hash === '#modal') {
        formSignUp.addEventListener( 'submit', event => {
            event.preventDefault();
            let name = document.querySelector('.name').value;
            let surname = document.querySelector('.surname').value;
            let password = document.querySelector('.passwordAuth').value;
            let password2 = document.querySelector('.password2').value;
            let brthData = document.querySelector('.brthData').value;
            let email = document.querySelector('.emailAuth').value;
            let men = document.querySelector('.men');
            let gender = men.checked ? 'men':'women';
            let name_arr = name.toLowerCase().split('');
            let surname_arr = surname.toLowerCase().split('');
            let nameUnacceptableSymbols = checkForUnacceptableSymbols(englishLetters.concat(russianLetters), name_arr);
            let surnameUnacceptableSymbols = checkForUnacceptableSymbols(englishLetters.concat(russianLetters), surname_arr);
            if (password === password2 && password.length === password2.length) {
                if (nameUnacceptableSymbols && surnameUnacceptableSymbols) {
                    createUser(email, password, name, surname, brthData, gender);
                } else alert (`Недопустимые символы в имени (${nameUnacceptableSymbols}) и фамилии (${surnameUnacceptableSymbols})`);
            } else alert ('Пароли не совпадают!')
        })
    }
}
