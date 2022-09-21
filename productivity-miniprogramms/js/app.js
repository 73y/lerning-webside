const addButton = document.getElementById('addButton');
const list = document.getElementById("item-1");


let times = [];
let counter = 0;

addButton.addEventListener('click', () => {
    userInput = prompt("add your new Task");
    if (userInput !== "") {
        times[counter] = 0;
        list.innerHTML += `
        <li id="item-${counter}">${userInput}: ${times[counter]}</li>
        `;
        counter++
    }
})

list.addEventListener('click', () =>
    console.log(event.target)

)

//task screen muss eingebaut werden