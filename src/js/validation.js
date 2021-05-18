import {
    input_name,
    input_surname,
    input_password,
    input_password2,
    submit_btn,
    formSignUp,
} from './domVariables';

let englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '`', ' '];
let russianLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' '];

function checkForUnacceptableSymbols(arr1, arr2) { //проверка на недопустимые символы
    let unacceptableSymbols = [];
    for (let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            unacceptableSymbols.push(arr2[i]);
        }
    }
    if(unacceptableSymbols.length > 0) {
        alert ('Недопустимые символы в имени и фамилии: '+ unacceptableSymbols);
    }
}

function checkPasswordMatch(str1, str2) {
    if (str1.length === str2.length) {
        if (str1 !== str2) {
            alert ('Пароли не совпадают!')
        }
    } else if (str1.length < 6) {
        alert ('Пароль слишком короткий! Должен быть не менее 6 символов')
    } else {
        alert ('Пароли не совпадают!')
    }
}

// if (window.location.pathname === '/#modal') {
//     submit_btn.onclick = function() {
//         let input_name_arr = input_name.value.toLowerCase().split('');
//         let input_surname_arr = input_surname.value.toLowerCase().split('');
//         checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_name_arr);
//         checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_surname_arr);
//         checkPasswordMatch(input_password.value, input_password2.value);
//     }
// }

formSignUp.addEventListener('submit', function(event) {
    event.preventDefault()
    let input_name_arr = input_name.value.toLowerCase().split('');
    let input_surname_arr = input_surname.value.toLowerCase().split('');
    checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_name_arr);
    checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_surname_arr);
    checkPasswordMatch(input_password.value, input_password2.value);
})