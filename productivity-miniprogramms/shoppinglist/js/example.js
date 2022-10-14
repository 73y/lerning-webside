// screenA
const mainDiv = document.getElementById('div1')
const ul = document.getElementById('ul')

//add button
const buttonAddA = document.getElementById('buttonAddA')
buttonAddA.addEventListener('click', () => {
    x = prompt('gib hier eine zahl ein');
    ul.innerHTML = `<li>${x}</li>`;
})

//screen switcher to 
const buttonSwitchB = document.getElementById('buttonSwitchToB')
buttonSwitchB.addEventListener('click', function screenB () {
	x = prompt('gib hier eine zahl ein');
	mainDiv.innerHTML = `
    <button id="buttonAdd2">buttonAdd2</button>
    <button id="buttonSwitchToA">buttonSwitchToA</button>
    <ul id="ul"></ul>
	`;
});

//ScreenB
const buttonAdd2 = document.getElementById('buttonAdd')
function addSwitchB () {
    const buttonSwitchA = document.getElementById('buttonSwitchToA')
    buttonSwitchA.addEventListener('click', function screenA () {
        x = prompt('gib hier eine zahl ein');
        mainDiv.innerHTML = `
        <button id="buttonAdd1">buttonAdd1</button>
        <button id="buttonSwitchToB">buttonSwitchToB</button>
        <ul id="ul+"></ul>
        `;
    });
}