let switchVar = "zutaten";
//zutaten
const main = document.getElementById('main');
let zutatList = [];

//Zu Zutaten switchen
function addZutatenSwitch () {
    const zutatenSwitch = document.getElementById('switchToZutaten');
    zutatenSwitch.addEventListener('click', () => {
        main.innerHTML = `
        <h2>Zutaten<button id="switchToRezepte">Rezepte --></button></h2>
        <table>
            <thead>
                <tr>
                    <th>Zutat</th>
                    <th>Menge</th>
                    <th>Preis</th>
                </tr>
            </thead>
            <tbody id="mainzutaten">
    
            </tbody>
        </table>
        <button id="addZutat">+</button>
        `;
        zutatScreen()
        addRezepteSwitch()
        const addZutat = document.getElementById('addZutat');
        addZutat.addEventListener('click', addZutatToList);
        switchVar = "zutaten";
    });
}
0
//zutaten erstellen
function zutat (name, menge, mengenangabe, preis) {
    this.name = name;
    this.menge = parseFloat(menge);
    this.mengenangabe = mengenangabe;
    this.preis = parseFloat(preis);
}


function zutatScreen () {
    const mainzutaten = document.getElementById('mainzutaten');
    mainzutaten.innerHTML = '';
    for (let i of zutatList) {
        console.log(i)
        mainzutaten.innerHTML += `
        <tr>
            <td>${i.name}</td>
            <td>${i.menge}${i.mengenangabe}</td>
            <td>${i.preis}€</td>
        </tr>`;
    }
}
zutatScreen()

const addZutat = document.getElementById('addZutat');
addZutat.addEventListener('click', addZutatToList);

function addZutatToList () {
    const name = prompt("Name der Zutat:")
    let preis = "";
    let menge = "";
    while (typeof menge !== "number") {
        menge = parseFloat(prompt("menge der Zutat:"));
    }
    if (isNaN(menge)) {
        menge = 0;
    }
    while (true) {
        mengenangabe = prompt("mengenangabe der zutat (stk oder g)")
        if (mengenangabe === "stk" || mengenangabe === "g") {
            break
        }
    }
    while (typeof preis !== "number") {
        preis = parseFloat(prompt("preis der Zutat in €:"))
    }
    if (isNaN(preis)) {
        preis = 0;
    }
    zutatList.push(new zutat(name, menge, mengenangabe,preis))
    if (switchVar == "zutaten") {
        zutatScreen()
    }
}


//rezepte
let rezepteList = [];

//Zu Zutaten switchen
function addRezepteSwitch () {
    const rezepteSwitch = document.getElementById('switchToRezepte');
    rezepteSwitch.addEventListener('click', () => {
        main.innerHTML = `
        <h2>Rezepte<button id="switchToZutaten">Zutaten --></button></h2>
        <table>
            <thead>
                <tr>
                    <th>Rezept</th>
                    <th>Port.</th>
                    <th>Preis</th>
                </tr>
            </thead>
            <tbody id="mainrezepte">
    
            </tbody>
        </table>
        <button id="addRezept">+</button>
        `;
        rezepteScreen()
        addZutatenSwitch()
        const addRezept = document.getElementById('addRezept');
        addRezept.addEventListener('click', addRezeptToList);
        switchVar = "rezepte";
    });
};
addRezepteSwitch()

//rezepte erstellen
function rezept (name, port, zutaten, preis) {
    this.name = name;
    this.port = port;
    this.zutaten = zutaten;
    this.preis = preis;
}

function rezepteScreen () {
    const mainrezepte = document.getElementById('mainrezepte');
    mainrezepte.innerHTML = '';
    for (let i of rezepteList) {
        console.log(i)
        mainrezepte.innerHTML += `
        <tr>
            <td>${i.name}</td>
            <td>${i.port}</td>
            <td>${i.preis}€</td>
        </tr>`;
        i.zutaten
    }
}

function addRezeptToList () {
    let allreadyThere = false;
    let preis = 0;
    let x = true;
    let zutatname = "";
    const zutaten = [];
    const name = prompt("Name des Rezepts:");
    const port = prompt("Portionen anzahl des Rezepts:");
    while (x) {
        zutatname = prompt('welche zutat soll hinzugefügt werden?');
        if(zutatname === "end") {
            break
        }
        for (let i of zutatList) {
            if (zutatname === i.name) {
                zutaten.push(i)
                allreadyThere = true;
                break
            }
        }
        if (allreadyThere === false) {
            zutaten.push(addZutatToList())
        }
    }
    for (let i of zutaten) {
        preis = preis + i.preis;
        console.log(i.preis)
    }
    rezepteList.push(new rezept(name, port, zutaten, preis))
    rezepteScreen()
}

//einkaufsliste



//bestand