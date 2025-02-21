let arr = [];
let arrLength = parseInt(prompt('Яка буде довжина масива?', ''));

for(let i = 0; i < arrLength; i++) {
    let digit = parseInt(prompt('Введіть число #'+ (i + 1), ''));
    arr.push(digit);
}

document.write(`<p>${arr.join(', ')}</p>`);

arr.sort(function(a,b){
    return a - b;
});

document.write(`<p>${arr.join(', ')}</p>`);

arr.splice(1,3);

document.write(`<p>${arr.join(', ')}</p>`);