
//Elements
const timertime = document.getElementById('tracker');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const restartButton = document.getElementById('restart');

//Event listeners
startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
restartButton.addEventListener('click', restart)

//variables
let x = [];
let times = localStorage.getItem('times');
if (times == null) {
    times = [];
} else {
    times = times.split(',');
    for (let i of times) {
        
    }
}


console.log(times);




let habits = localStorage.getItem('habits');
if (habits == null) {
    habits = [];
} else {
    habits = habits.split(',');
}
let secs = 0;
let mins = 0;
let hours = 0;
let interval = null;
let selectedHabit = null;

//timer functions
function timer () {
    secs++;
    if (secs === 60) {
        mins++;
        secs = 0;
    }
    if (mins === 60) {
        hours++;
        mins = 0;
    }
    if (selectedHabit !== null) {
        times[selectedHabit][0]++
        if (times[selectedHabit][0] === 60) {
            times[selectedHabit][1]++;
            times[selectedHabit][0] = 0;
        }
        if (times[selectedHabit][1] === 60) {
            times[selectedHabit][2]++;
            times[selectedHabit][1] = 0;
        }
    }
    habitScreen(habits)
    timerScreen()
}

function timerScreen () {
    timenow = `${numbersCheck(hours)}:${numbersCheck(mins)}:${numbersCheck(secs)}`;
    timertime.innerText = timenow;
}


function start () {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000)
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function restart () {
    clearInterval(interval);
    interval = null;
    secs = 0;
    mins = 0;
    hours = 0;
    timertime.innerText = '00:00:00';
}

//CLOCK
setInterval(setClock, 1000)

function setClock () {
    const currentDate = new Date();
    const sec = numbersCheck(currentDate.getSeconds());
    const min = numbersCheck(currentDate.getMinutes());
    const hours = numbersCheck(currentDate.getHours());
    const time = `${hours}:${min}:${sec}`;
    document.querySelector('#time').innerHTML = time;
    return time;
}

//set a 0 before the number if only 1 number is there
function numbersCheck (number) {
    if ( String(number).length === 1 ) {
        return `0${number}`;
    } else {
        return number;
    }
}

//TIMERSAVES
//varibels
let counter = 0;
let habitCounter = 0;

//elements
const text = document.getElementById('liste');
const addButton = document.getElementById('add');
let saveQuestion = '';

//eventlisteners
addButton.addEventListener('click', addHabit);



//functions
function addHabit () {
    let habit = prompt('What Habit do you want to add?');
    if (habit !== '') {
        habits.push(habit);
    }
    times.push([0, 0, 0]);
    habitScreen(habits)
    habitCounter++
}

function habitScreen (habits) {
    text.innerHTML = '';
    for (let i of habits) {
        text.innerHTML += `
        <li id="habit${counter}">${i} ${numbersCheck(times[counter][2])}:${numbersCheck(times[counter][1])}:${numbersCheck(times[counter][0])}</li>
        <button onclick="selectButton(${counter})" class="deleteButton">select</button>
        <button onclick="deleteButton(${counter})" class="deleteButton">delete</button>`;
        counter++
    }
    counter = 0;
} 

function deleteButton (counter) {
    saveQuestion = prompt('Write "DELETE" to delete this habit');
    if ( saveQuestion === "DELETE" ) {
        habits.splice(counter, 1);
        times.splice(counter, 1)
        habitScreen(habits);
        saveQuestion = '';
        habitCounter--
    } else { 
        saveQuestion = '';
    }
}


function selectButton (counter) {
    selectedHabit = counter;
    console.log(counter);
}
habitScreen(habits)