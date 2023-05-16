const btn = document.querySelector('button');
const cls = document.querySelector('.close')
const reveel = document.querySelector('.main-content')

btn.addEventListener('click', function(){
    reveel.style.display = 'block';
    btn.style.display = 'none';
})

cls.addEventListener('click', function(){
    reveel.style.display = 'none';
    btn.style.display = 'block';
})

window.addEventListener('click', function(e){
    if(e.target === reveel){
        reveel.style.display = 'none';
        btn.style.display = 'block';
    }
})