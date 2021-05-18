import {
    wrapper,
    headerModal,
    header_form,
    header_form_media,
} from './domVariables';


if (window.location.pathname === '/') {
    header_form_media.onclick = function() {
        headerModal.append(header_form);
        header_form.setAttribute('class', 'header_formModal');
        headerModal.style.display = 'flex';
        wrapper.style.position = 'fixed';
    }
}
