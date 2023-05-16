
show = document.querySelector('#Cover');
let tadan = document.querySelector('.close');
let menus = document.querySelector('.menu-grid');
let menu = document.querySelector('.menu');
let dare = document.querySelector('.closer');

document.getElementById('akuna').addEventListener('click', clicko);

function clicko(){
    document.getElementById('akuna').innerHTML = "You just won a goat, hurray!";
    tadan.style.visibility = 'visible';
}

tadan.addEventListener('click', function(){
    document.getElementById('akuna').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ipsa nobis molestias animi illo eveniet a voluptatem repellendus ducimus? Corrupti ea labore sapiente similique eveniet deserunt ex enim fuga ipsum.";
    tadan.style.visibility = 'hidden'
})

menus.addEventListener('click', function(){
    menu.style.visibility= 'visible';
    menus.style.visibility='hidden';
    dare.style.display = 'block';
    document.getElementById('akuna').style.visibility='hidden';
})
dare.addEventListener('click', function(){
    menu.style.visibility= 'hidden';
    menus.style.visibility='visible';
    dare.style.display='none';
    document.getElementById('akuna').style.visibility='visible';
})


