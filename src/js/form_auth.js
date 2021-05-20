import {
    formSignUp,
    formAuth,
    header_form,
    sidebar_sale_game
} from './domVariables';
import {
    signIn,
    initApi,
    createUser,
} from './api_handlers.js';
import { setToken, getToken } from './localSt';
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
        if(getToken()) {
            sidebar_sale_game.style.display = 'block';
            header_form.style.display = 'none';
            createButtonExit();
        } else {
            sidebar_sale_game.style.display = 'none';
            if (window.innerWidth > 510) {
                header_form.style.display = 'block';
            }

        }
        formAuth.addEventListener('submit', event => {
            const email = document.querySelector('.email').value;
            const password = document.querySelector('.password').value;
            event.preventDefault();
            signIn(email, password).then( ({idToken}) => {
                if(idToken) {
                    setToken(idToken);
                    location.reload();
                    alert('Ваша корзина с товарами пуста🗑️');
                } else alert('Такой пользователь не зарегистрирован!');
            });
        });
    }

    if(window.location.pathname === '/' && window.location.hash === '#modal') {
        formSignUp.addEventListener('submit', event => {
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
            let nameUnacceptableSymbols = checkForUnacceptableSymbols(englishLetters.concat(russianLetters),
                name_arr.concat(surname_arr));
            if (password === password2 && password.length === password2.length) {
                if (!nameUnacceptableSymbols.length) {
                    createUser(email, password, name, surname, brthData, gender);
                } else alert (`Недопустимые символы в имени и фамилии: ${nameUnacceptableSymbols}`);
            } else alert ('Пароли не совпадают!')
        })
    }
}
