//Определяет является ли слово полиморфмным
function isPolymorphs(word){
    return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
}

//Начинает имя с буквы верхнего регистра
function names(name) {
    return name[0].toUpperCase() + name.slice(1);
}

//Преобразует слово с прыгующими буквами
function UpDoWnCaSe(word){
    let newWord = '';
    for (let i = 1; i < word.length; i= i+2){
        newWord += word[i - 1].toUpperCase() + word[i].toLowerCase();
    }

    return newWord;
}

function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        return 'fizzbuzz';
    }
    else if (num % 5 === 0){
        return 'buzz';
    }
    else if (num % 3 === 0){
        return 'fizz';
    }
    else {
        return 'Не нада так'
    }
}

//Максимальное и минимальное числа
function MaxAndMin(numbers){
    let num = numbers.split(' ');
    let max = parseInt(num[0]);
    let min = parseInt(num[0]);

    for(let i = 0; i < num.length; i++){
        if(parseInt(num[i]) > max){
            max = parseInt(num[i]);
        }
        if(parseInt(num[i]) < min){
            min = parseInt(num[i]);
        }
    }
    return `Max: ${max}\nMin: ${min}`;
}

//Убирает все гласные из предложения (кроме "y", таково задание)
function diseMvowel(str) {
    return str.split('').filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x.toLowerCase())).join('');
}

//Определяет является ли слово изограмом
function isIsogram(str){
    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length; j++){
            if (str[i].toLowerCase() === str[j].toLowerCase()){
                return false;
            }
        }
    }
    return true;
}

//Возращает кол-во гласных букв в слове (кроме "y", таково задание)
function getCount(str) {
    return str.split('').filter(x => ['a', 'e', 'i', 'o', 'u'].includes(x.toLowerCase())).length;
}

//Возращает сумму только положительных чисел
function positiveSum(arr) {
    let sum = 0;
    arr.filter(x => x > 0).forEach((item) => {
        sum += item;
    });

    return sum;
}

const h1 = document.getElementById('answr');
h1.textContent = MaxAndMin('5');