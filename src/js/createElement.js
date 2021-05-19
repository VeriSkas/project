import { removeToken } from './api_handlers.js';
import { header_form, header } from './domVariables';

export let createButtonExit = () => {
    let button = document.createElement('button');
    button.className = 'exit';
    button.innerHTML = 'Выйти из личного кабинета';
    header.after(button);
    button.onclick = () => {
        removeToken();
        header_form.style.display = 'block';
        button.remove();
    }
}
