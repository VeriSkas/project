import { header_form } from './domVariables';

function checkMediaQuery() {
    if (window.innerWidth < 510) {
        header_form.style.display = 'none';
    } else {
        header_form.style.display = 'block';
    }
}

window.addEventListener('resize', checkMediaQuery);
