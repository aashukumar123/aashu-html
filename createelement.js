const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
//const  firstimage= document.querySelector("img")

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

 //for (let i = 2; i <=100; i++) {
   //  const newimg = firstimage.cloneNode()
    // newimg.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png`
    // container.append(newimg)
 //}


 //const paragraph = document.createElement("p");
//  paragraph.innerText="hello"
// paragraph.classList.add("my-para")//to add a class
// paragraph.id="hii"
 
// container.append(paragraph)

const  newImage = document.createElement("img")
newImage.src=` <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png">`
container.append(newImage)



//second to add image in container with help of createElement
 for (let i = 1; i <=100; i++) {
     const newimg = document.createElement("img")
     newimg.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png`
     container.append(newimg)
 }