let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
switch (isNaN(minValue) || minValue) {
    case true:
      minValue = -999;
        break;
    default:
        minValue = minValue < -999 ? -999 : minValue;
}

let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
switch (isNaN(maxValue) || maxValue) {
    case true:
      maxValue = 999;      
        break;
    default:
        maxValue = maxValue > 999 ? 999 : maxValue;  
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.textContent = orderNumber;
answerField.textContent = `Вы загадали число ${answerNumber}?`;

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            const phraseRandom = Math.round( Math.random() * 2);
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            if (phraseRandom === 1){
            answerField.textContent = `Вы загадали число ${answerNumber }?`;
            } else {
                answerField.textContent = `Что-то мне подсказывает, что это ${answerNumber}`;
            }
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            const phraseRandom = Math.round( Math.random() * 2);
            maxValue = answerNumber  - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            if (phraseRandom === 1){            
            answerField.textContent = `Это число ${answerNumber }?`;
            } else {
                answerField.textContent = `Думаю, что это ${answerNumber}`;
            }
            

        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.textContent = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

document.querySelector('#btnRetry').addEventListener('click', (event) => {
    let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    switch (isNaN(minValue) || minValue) {
        case true:
          minValue = -999;
            break;
        default:
            minValue = minValue < -999 ? -999 : minValue;
    }
    
    let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    switch (isNaN(maxValue) || maxValue) {
        case true:
          maxValue = 999;      
            break;
        default:
            maxValue = maxValue > 999 ? 999 : maxValue;  
    }

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.textContent = orderNumber;
    answerField.textContent = `Вы загадали число ${answerNumber }?`
})