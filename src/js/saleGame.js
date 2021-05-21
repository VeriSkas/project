import { clickField, helper } from './domVariables';
import { setLS } from './localSt';

let width;
let height = 500;
let saleMax = 50;
let distance;
let counter = 0;

if (window.innerWidth > 880) {
    width = 800;
} else if (window.innerWidth > 790) {
    width = 700;
} else if (window.innerWidth > 600) {
    width = 500;
} else {
    width = 350;
}

function  getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

console.log(target);

function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

function getDistanceHint(distance) {
    if (distance < 40) {
        return "Обожжешься!";
    } else if (distance < 60) {
        return "Очень горячо";
    } else if (distance < 100) {
        return "Горячо";
    } else if (distance < 150) {
        return "Тепло";
    } else if (distance < 250) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

if (window.location.pathname === '/index2.html') {
    clickField.onclick = function (event) {
        counter++;
        distance = getDistance(event, target);
        helper.innerHTML = getDistanceHint(distance);
        let sale = saleMax - counter;
        if (sale <= 0) {
            alert(`Увы, скидку не нашли! Повезет в следующий раз! 😉`);
            setLS('game', '+');
            window.location.href = '/';
            location.reload();
        }
        if (distance < 20) {
            alert(`УРА!!! Ваша скидка составляет ${sale}%. Она будет применена к Вашей корзине`);
            setLS('game', 'true');
            window.location.href = '/';
        }
    }
}
