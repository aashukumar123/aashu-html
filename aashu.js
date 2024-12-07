//const h1 = document.querySelector('h1')
//const paragraph= document.querySelector('p')
//console.log(paragraph.innerHTML);
//console.log(paragraph.innerHTML);
//paragraph.innerHTML = "<h1>hii</h1>"
//const soop=paragraph.innerText= "i am aashu"
//console.log(soop);
//paragraph.textContent="<h1>hiii</h1>"
//document.querySelector("h1").style.color="hotpink"//chnage by using javasript
//document.querySelector("h1").style.background="red"
//h1.style.color="hotpink"//you can also this way to use
//h1.style.background="red"
//how to change all anchor tag color by using queryselectorAll
const allanchor=document.querySelectorAll("a")
//for(let i=0;i<allanchor.length;i++)
//{
//allanchor[i].style.color="teal"
//}//same example with for of loop
//for(let link of allanchor)
//{
  //  link.style.color="green"
   // link.style.textDecoration="none"
    //link.style.fontWeight=700
    ///link.style.fontFamily="cursive"
    //link.style.fontsize = "18px"
//}
//some another example of over method
//for(let link of allanchor)
//{
//link.style.cssText=
` 
 
    color:red;
    font-size: 18px;
    font-family: cursive
    font-weight: 700;
   text-decoration-line:none ;
`
//}
//another method of above example
//for(let link of allanchor)
//{
  //  link.classname = "green-link"
    //link.classname = "wavy-link"
//}
//for(let link of allanchor)
//{
//link.setAttribute('class','green-link')
//}
for(let link of allanchor)
{
    link.classList.add('green-link')
    link.classList.remove('my-link')
    link.classList.toggle("my-link")
}