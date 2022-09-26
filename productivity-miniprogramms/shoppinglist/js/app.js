const userInput = document.getElementById('textfield')
const addButton = document.getElementById('addButton')
const ullist = document.getElementById('ullist')

let list = [];

addButton.addEventListener('click', addItem)

function addItem () {
    list.push(userInput.value)
    listScreen()
}

function listScreen () {
    ullist.innerHTML = ""
    for (let i of list) {
        ullist.innerHTML += `
        <li>${i}<button>-</button></li>
        `;
        
    }
}