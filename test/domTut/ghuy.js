

const tan = document.querySelector('.list');
const newName = document.createElement('a');
newName.innerText = 'Amed';
newName.setAttribute('class', 'list-6');
newName.setAttribute('href', '#');
tan.appendChild(newName);
console.log(newName);


const yut = document.querySelectorAll('a');
for(let ab of yut){
ab.style.color='red';
console.log(ab);
};

tan.addEventListener('click', function(b){
    console.log(b.target.getAttribute('class') + ' is clicked');
    const target = b.target;
    console.log(target)
    target.style.backgroundColor = 'blue';
})


