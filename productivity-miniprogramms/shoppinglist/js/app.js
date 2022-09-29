//zutaten
const zutatmainlist = document.getElementById('zutatmainlist');
let zutatList = [];

//zutaten erstellen
function zutat (name, menge, preis) {
    this.name = name;
    this.menge = menge;
    this.preis = preis;
}


function zutatScreen () {
    zutatmainlist.innerHTML = '';
    for (let i of zutatList) {
        console.log(i)
        zutatmainlist.innerHTML += `<tr><td>${i.name}</td><td>${i.menge}</td><td>${i.preis}</td></tr>`;
    }
}
zutatScreen()


const addZutat = document.getElementById('add-zutat')
addZutat.addEventListener('click', addZutatToList)


function addZutatToList () {
    const name = prompt("Name der Zutat:")
    const menge = prompt("menge der Zutat:")
    const preis = prompt("preis der Zutat:")
    zutatList.push(new zutat(name, menge, preis))
    zutatScreen()
}




//rezepte



//einkaufsliste



//bestand