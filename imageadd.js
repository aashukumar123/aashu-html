//const container = document.querySelector(".container")
//for(let i=1;i<=100;i++)
//{
//const imagecontainer= document.createElement("div")
//imagecontainer.classList.add("image-container")

//const newimage=document.createElement("img")
//newimage.src=`<img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png">`

//const paragraph = document.createElement("p")
//paragraph.innerText= i

//container.append(newimage,paragraph)
//container.append(imagecontainer)
//}





const container = document.querySelector(".container")
for(let i=1;i<=100;i++)
{
const imagecontainer= document.createElement("div")
imagecontainer.classList.add("image-container")

const myhtml=`<img src = <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png"><p>${i}</p>`


imagecontainer.innerHTML=myhtml
container.append(imagecontainer)
}

const myImg=document.querySelector("body > div > div:nth-child(6)")
myImg.remove()//this is used to removed a elemnt 
//myImg.parentElement.removechild(myImg) same way that is used in upper one