let tugma = document.querySelector('.btn');
let sett = document.querySelector('.inset');
let find = document.querySelector('.find');
let icon = document.querySelector('.icon');
let search = document.querySelector('.search');
let menus = document.querySelector('.menus');
tugma.addEventListener('click', () => {
    if(sett.classList.contains('hide')){
        sett.classList.remove('hide');
    } else {
        sett.classList.add('hide');
    }
});


find.addEventListener('click', () => {
    if(icon.classList.contains('icon')){
        icon.className= 'ic fa-solid fa-x';
        search.classList.remove('hide');
        menus.classList.add('hide');
    } else {
        icon.className = 'icon fa-solid fa-magnifying-glass';
        search.classList.add('hide');
        menus.classList.remove('hide');
    }
});
