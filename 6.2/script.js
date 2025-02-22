let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveNum = 0, positiveSum = 0, negativeNum = 0,
    oddPositiveNum = 0, evenPositiveNum = 0, sumEvenPositiveNum = 0, sumOddPositiveNum = 0,
    positiveNumMult = 1;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        positiveSum += arr[i];
        positiveNum += 1;
        positiveNumMult *= arr[i];
    } else if(arr[i] < 0) {
        negativeNum += 1;
    }
    if(arr[i] > 0 && arr[i] % 2 !== 0) {
        oddPositiveNum += 1;
        sumOddPositiveNum += arr[i];
    } else if(arr[i] > 0 && arr[i] % 2 === 0) {
        evenPositiveNum += 1;
        sumEvenPositiveNum += arr[i];
    }
}

document.write(`<p>Сума додатних елементів ${positiveSum}, кількість ${positiveNum}</p>`);

let sortedArr = arr.slice().sort(function(a,b){
    return a - b;
}).reverse();

let lustElem = sortedArr.length - 1;
let firstElem = sortedArr[0];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== firstElem) {
        arr[i] = 0;
    }
}

document.write(`<p>найменший елемент масива ${sortedArr[lustElem]}, його індекс ${arr.indexOf(sortedArr[lustElem])}</p>`);
document.write(`<p>максимальний елемент масива ${firstElem}, його індекс ${arr.indexOf(firstElem)}</p>`);
document.write(`<p>кількість від’ємних елементів масива ${negativeNum}</p>`);
document.write(`<p>кількість непарних додатних елементів ${oddPositiveNum}</p>`);
document.write(`<p>кількість парних додатних елементів ${evenPositiveNum}</p>`);
document.write(`<p>сума парних додатних елементів ${sumEvenPositiveNum}</p>`);
document.write(`<p>сума непарних додатних елементів ${sumOddPositiveNum}</p>`);
document.write(`<p>добуток всіх додатних елементів ${positiveNumMult}</p>`);
document.write(`<p>${arr.join(', ')}</p>`);