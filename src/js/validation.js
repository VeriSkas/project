export let englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '`', ' '];
export let russianLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' '];

export const checkForUnacceptableSymbols = (arr1, arr2) => { //проверка на недопустимые символы
    let unacceptableSymbols = [];
    for (let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            unacceptableSymbols.push(arr2[i]);
        }
    }
    return unacceptableSymbols;
}
