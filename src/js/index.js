import '../scss/style.scss';
import './index2';

//Выбирать количество товара

let product_buttons = document.querySelectorAll('.product_button');
let counter = 0;

for (let i = 0; i < product_buttons.length; i++) {
    let clickCounter =  0;
    product_buttons[i].onclick = function () {
        if(clickCounter === 0) {
            let div = document.createElement('div');
            let plus = document.createElement('button');
            plus.innerHTML = '+';
            let minus = document.createElement('button');
            minus.innerHTML = '&#8211';
            let spanNum = document.createElement('span');
            spanNum.innerHTML = ` 0 `;
            product_buttons[i].before(div);
            div.append(minus);
            div.append(spanNum);
            div.append(plus);

            minus.onclick = function() {
                counter > 0 ? counter-- : counter = 0;
                spanNum.innerHTML = `  ${counter}  `;
            }

            plus.onclick = function() {
                counter++;
                spanNum.innerHTML = `  ${counter}  `;
            }
        }
        clickCounter++;
    }
}

// Валидация формы регистрации

let englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '`'];
let russianLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
let input_name = document.querySelector('.name');
let input_surname = document.querySelector('.surname');
let input_password = document.querySelector('.password');
let input_password2 = document.querySelector('.password2');
let submit_btn = document.querySelector('.buttons button[type="submit"]');

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
    console.log(str1, str2);
}

if (window.location.pathname === '/') {  //чтоб не вылазила ошибка на другой страничке, что данной кнопки нет
    submit_btn.onclick = function() {
        let input_name_arr = input_name.value.toLowerCase().split('');
        let input_surname_arr = input_surname.value.toLowerCase().split('');
        checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_name_arr);
        checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_surname_arr);
        checkPasswordMatch(input_password.value, input_password2.value);
    }
}

// Кнопка ПОИСК

let input_search = document.querySelector('.input_search');
let btn_search = document.querySelector('.btn_search');

if (window.location.pathname === '/') {
    btn_search.onclick = function() {
        alert('По вашему запросу ничего не найдено: ' + input_search.value);
        input_search.value = '';
    }
}

//форма модалка header

let header_form_media = document.querySelector('.header_form_media');
let header_form = document.querySelector('.header_form');
let headerModal = document.querySelector('.headerModal');
let wrapper = document.querySelector('.wrapper');

if (window.location.pathname === '/') {
    header_form_media.onclick = function() {
        headerModal.append(header_form);
        header_form.setAttribute('class', 'header_formModal');
        headerModal.style.display = 'flex';
        wrapper.style.position = 'fixed';
    }
}
