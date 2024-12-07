const h1=document.querySelector("h1")
const container=document.querySelector(".container")
const card =document.querySelector(".card")
container.appendChild(h1)//move to another place
//container.appendChild(h1.cloneNode(true))// changing the place another place without its move original place 
//add text
//container.appendChild(card.cloneNode())
//const newcard =card.cloneNode()
//newcard.innerText=2
//loop method
//for(i=2;i<100;i++)
//{
    //const newcard =card.cloneNode()
    //newcard.innerText=i;
  //  container.appendChild(newcard)

//}
//add text with the help of appendchild
const newtext=document.createTextNode("helllo")
container.appendChild(newtext)
//container.appendChild("hello",hi,"world")//add only first one but in append
//container.append("hello",hi,"world")//add three in container attribute
//document.createElement(Anurag)//create a tag <anurag></anurag>

