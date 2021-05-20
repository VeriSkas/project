import {
    wrapper,
    headerModal,
    header_form,
    header_form_media,
    sidebar_search,
} from './domVariables';


if (window.location.pathname === '/') {
    header_form_media.onclick = function() {
        headerModal.append(header_form);
        header_form.setAttribute('class', 'header_formModal');
        let header_formModal = document.querySelector('.header_formModal');
        header_formModal.style.display = 'block';
        headerModal.style.display = 'flex';
        wrapper.style.position = 'fixed';
        sidebar_search.style.display = 'none';
    }
}
