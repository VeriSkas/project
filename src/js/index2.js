let clickField = document.querySelector('.clickField');
let helper = document.querySelector('.helper');
let width = 800;
let height = 500;
let saleMax = 50;
let distance;

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
    } else if (distance < 80) {
        return "Горячо";
    } else if (distance < 100) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

if (window.location.pathname === '/index2.html') {
    clickField.onclick = function (event) {
        distance = getDistance(event, target);
        helper.innerHTML = getDistanceHint(distance);
        let sale = getRandomNumber(saleMax);
        if (distance < 20) {
            alert(`УРА!!! Ваша скидка составляет ${sale}%. Она будет применена к Вашей корзине`);
            clickField.style.display = 'none';
        }
    }
}
