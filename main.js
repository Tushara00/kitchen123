const navIconEl = document.querySelector('.nav_icon');
const navCloseEl = document.querySelector('.nav_close');
const navList = document.querySelector('.nav_list');
const navoverlayEl = document.querySelector('.nav_bgoverlay');

const navOpen = () => {
    navList.classList.add('show')  ;
    navoverlayEl.classList.add('active')  ;
    document.body.style ='visibility: visible;height:100vh;width:100vw ;overflow:hidden';
}

const navClose = () => {
    navList.classList.remove('show')  ;
    navoverlayEl.classList.remove('active')  ;
    document.body.style ='visibility: visible;height:initial;width:100vw;overflow-x:hidden';
}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navoverlayEl.addEventListener('click',navClose);

//aos
AOS.init({
    offset:200,
    delay:100,
    duaration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorPlacement: 'top-bottom'
})