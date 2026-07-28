window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#ffffff";

header.style.boxShadow =
"0 4px 20px rgba(0,0,0,.08)";

}
else{

header.style.background =
"rgba(255,255,255,.95)";

}

});