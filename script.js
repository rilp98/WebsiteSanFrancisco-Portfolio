const navMain=document.querySelector(".nav-main");
const navHamburguer=document.querySelector(".nav-hamburguer");
const navMap=document.querySelector(".nav-map");

navHamburguer.addEventListener('click',function(){
    navMain.classList.toggle('open');
});

navMap.addEventListener('click',function(){
    navMain.classList.toggle('sectionMap');
});



