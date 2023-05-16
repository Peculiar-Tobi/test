// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{quote: '"When the going gets tough, the tough get going."', person: 'Peculiar Tobiloba'},
{quote: '"The journey of a thousand miles begins with a step forward."', person: 'Tobiloba Ogunmesi'},{quote: ' "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."', person: 'Abraham Lincoln'},
{quote: '"Men ought always to pray and not to faint."', person: "Jesus Christ"},{quote: '"It isn\'t a matter of if the storm will come, it is when the storm will come."', person: 'Daddy E.A Adeboye'}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})