const addButton = document.getElementById('addButton');
const list = document.getElementById("item-1");

let tasks = [];
let times = [];
let counter = 0;

addButton.addEventListener('click', () => {
    userInput = prompt("add your new Task");
    if (userInput !== "") {
        tasks.push(userInput);
    }
    taskScreen()
})

list.addEventListener('click', () =>
    console.log(event.target)

)

//task screen muss eingebaut werden

function taskScreen () {
    list.innerHTML = "";
    for (let i of tasks) {
        times[counter] = 0;
        list.innerHTML += `
        <li id="item-${counter}">${i}: ${times[counter]}</li>
        `;
        counter++
        console.log(tasks)
    }

}