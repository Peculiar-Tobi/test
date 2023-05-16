const show = document.querySelectorAll('button');
const screen = document.querySelector('p');
const clrScreen = document.querySelector('.clong')
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const times = document.querySelector('.times');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');

let buffer = '0';
let runningTotal = 0;
let previousOperator = null;

function buttonClick(value){
   if (isNaN(parseInt(value))){
    handleSymbol(value)
   } else{
    handleNumber(value);
   }
   rerender()
}

function handleNumber(number){
    if(buffer === '0'){
        buffer = number;
    }
    else{
        buffer+=number;
    }
    
}
function handleMath(value){
    if (buffer === '0'){
        //do nothing
        return
    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = intBuffer;
    }else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = '0'  
    console.log(runningTotal);
}

function flushOperation(intBuffer){
    if (previousOperator === '+'){
        runningTotal += intBuffer
    } else if (previousOperator === '−'){
        runningTotal -= intBuffer
    } else if (previousOperator === '÷'){
        runningTotal /= intBuffer
    } else if (previousOperator === '×'){
        runningTotal *= intBuffer;
    }
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            break;
        case '=':
            if(previousOperator === null){
                // need do numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
   
}
function init(){
    document.querySelector('.container')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

function rerender(){
    screen.innerText = buffer;
}


init()


//ajax = requesting data from the server without refreshing the page
//JSON.parse, JSON.stringify(dog, null, 3) the 3 is for indent. the null gives the ability to modify a function. Api is a url that you can make request to get info back from the server
// console.log(show);
// console.(numbers)
// numbers.forEach((iI) =>{iI.addEventListener('click', function(){
//     screen.innerText += iI.innerText;

   
    

//     // screen.innerText++
//     // if(iI.innerText = 1){
//     //     screen.innerText += iI.innerText;
//     // }
//     // else if (iI.innerText = 2) {
//     //     screen.innerText += iI.innerText;
//     // } 
//     // else if (iI.innerText === 3) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else if (iI.innerText=== 4) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else if (iI === 5) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else if (iI === 6) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else if (iI === 7) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else if (iI === 8) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else if (iI === 9) {
//     //     screen.innerText = iI.innerText;
//     // }
//     // else {
        
//     // }
   
// })});

// clrScreen.addEventListener('click', function(){
//     screen.innerText = 0;
// })

// times.addEventListener('click', function(){
//      record *= record;
// })
// equal.addEventListener('click', function(){
//     screen.innerText = record;
// })

