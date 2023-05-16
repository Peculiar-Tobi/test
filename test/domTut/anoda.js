const invisible = document.querySelector('.invisible');
const reveal = document.querySelectorAll('.content');

// reveal.addEventListener('click', function(){
//     for(i=0; i< invisible.length; i++){

//         invisible[i].style.display = 'block';
//     }
       
// })

// for(i=0; i< reveal.length; i++){
//     reveal[i].addEventListener('click', function(){
//         invisible.style.display='block'
//         this.innerText = '-'
        
//     })
// }

for(i = 0; i < reveal.length; i++){
    reveal[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}