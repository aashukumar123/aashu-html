const firstlink=document.querySelector("body > p > a.my-link.hello").parentElement
//console.log(firstlink);
//document.querySelector("body > p > a.my-link.hello").parentElement.children
//document.querySelector("body > p > a.my-link.hello").parentElement.childNodes
//const atul=firstlink.nextElementSibling
//console.log(atul);
//const secondlink=document.querySelector("body > p > a.my-link.hello")
//const dot=secondlink.nextElementSibling
//console.log(dot);
//secondlink.nextElementSibling.nextElementSibling
const thirdlink=firstlink.previousElementSibling
console.log(thirdlink);