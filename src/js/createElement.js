import { removeLS } from './localSt';
import { header_form, header } from './domVariables';

export let createButtonExit = () => {
    let button = document.createElement('button');
    button.className = 'exit';
    button.innerHTML = 'Выйти из личного кабинета';
    header.after(button);
    button.onclick = () => {
        removeLS('token');
        if (window.innerWidth > 510) {
            header_form.style.display = 'block';
        }
        button.remove();
        location.reload();
    }
}
