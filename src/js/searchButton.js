import { input_search, btn_search } from './domVariables';

if (window.location.pathname === '/') {
    btn_search.onclick = function() {
        alert('По вашему запросу ничего не найдено: ' + input_search.value);
        input_search.value = '';
    }
}
