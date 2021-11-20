//Фильтрует и возращает массив нечетных чисел
function filterOddDigitalArray(numArray){
    return numArray.filter(x => x % 2 !== 0);
}

//Принимает в качестве параметра массив чисел и возвращает массив их квадратов
function squareArray(numArray){
    let squareArray = [];
    for (let i = 0; i < numArray.length; i++){
        squareArray[i] = numArray[i] ** 2;
    }
    return squareArray;
}

//Качестве параметра принимает массив с разными типами данных. возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет
function isStr(array){
    for (let i = 0; i < array.length; i++){
        if(typeof array[i] === 'string' || array[i] instanceof String){
            return true;
        }
    }
    return false;
}

alert(isStr([1,'s',3,4]));