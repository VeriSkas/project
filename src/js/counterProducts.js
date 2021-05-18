import { product_buttons } from './domVariables';

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
