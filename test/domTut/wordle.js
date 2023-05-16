const boxes = document.querySelectorAll('.scoreboard-letter');
const loading = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;

function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter)
}
function setLoading(isLoading){
    loading.classList.toggle('hidden', !isLoading);
}

async function init(){

let currentGuess = '';
let currentRow = 0;

const res = await fetch("https://words.dev-apis.com/word-of-the-day");
const resObj = await res.json();
const word = resObj.word.toUpperCase();
const wordPart = word.split("");
setLoading(false);

console.log(word);

    function addLetter(letter){
        if (currentGuess.length < ANSWER_LENGTH){ 
            // add letter to the end
            currentGuess += letter;
        }else{
            // replace the last letter
            currentGuess = currentGuess.substring(0, currentGuess.length-1) + letter;
        }
        boxes[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
    };

    async function commit(){
        if (currentGuess.length !== ANSWER_LENGTH){
            //do nothing
            return;
        }

        if (currentGuess === word){
            ///win
            alert('You win!');
            return;
        }
        const guessParts = currentGuess.split("");
        const map = makeMap(wordPart);
       
        
        for(let i=0; i < ANSWER_LENGTH; i++){
            //mark as correct
            if(guessParts[i] === wordPart[i]){
                boxes[currentRow * ANSWER_LENGTH + i].classList.add("correct");
                map[guessParts[i]]--;
            }
        }

        for(let i=0; i < ANSWER_LENGTH; i++){
            if (guessParts[i] === wordPart[i]){
                //do nothing, we already did
            } else if (wordPart.includes(guessParts[i]) && map[guessParts[i]] > 0) {
                //mark as close
                boxes[currentRow*ANSWER_LENGTH + i].classList.add("close");
                map[guessParts[i]]--;
            }else{
                boxes[currentRow*ANSWER_LENGTH + i].classList.add("wrong");
            }
        }
        currentRow++;
        currentGuess = '';
    }
    
   function backspace(){
    currentGuess = currentGuess.substring(0, currentGuess.length-1);
    boxes[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";

    }
        

    document.addEventListener('keydown', function handleKeyPress (event){
        //uses isLetter function from above
        const action = event.key;
        if (action === 'Enter'){
            commit();
        } else if (action === 'Backspace'){
            backspace();
        } else if (isLetter (action)){
            addLetter(action.toUpperCase())
        } else{
        //do nothing
        // (!isLetter(action)){
        //     event.preventDefault();
        // }
    
 }})
 
 
}


function makeMap(array){
    const obj = {};
    for(let i = 0; i < array.lenght; i++){
        const letter = array[i]
        if (obj[letter]){
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }

    return obj;
}
init();
    // GET https://words.dev-apis.com/word-of-the-day