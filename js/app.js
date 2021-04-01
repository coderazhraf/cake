
let openNav = document.querySelector(".openNav");
let navMobile = document.querySelector(".navMobile");
var closenav = document.querySelector("closenav");

openNav.addEventListener("click", function(){
    navMobile.classList.toggle("closenav");
});


