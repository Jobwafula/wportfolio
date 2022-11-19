let text ='frontend developer, <br/> &technical writer';


let text2 = 'With a passion for building and getting solutions </br> through open source projects'

//assignments
const h1 = document.getElementById("text");
const h2 = document.getElementById("text2");
h1.innerHTML = text;
h2.innerHTML = text2;

let text3 = 'I\'m a frontend developer living in Nairobi, Kenya'
let text3ext = 'specializing in web development and open source.'
let text4 = 'Technologies and tools I\'m currently'
const p1 = document.getElementById("p1");
const p2 =document.getElementById("p2");
const p1ext = document.getElementById("p1ext");
p1.innerHTML =text3;
p1ext.innerHTML = text3ext;
p2.innerHTML = text4;
p1.style.textIndent="0px";



