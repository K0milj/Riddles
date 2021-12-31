var username = prompt("Username: ");
var userBox = document.createElement("div");
var nameOfUser = document.createElement("p");
if (username == "" || username == null) {
    nameOfUser.textContent = `Hello user!`;
} else {
    nameOfUser.textContent = `Hello ${username}!`;
}
userBox.append(nameOfUser);
userBox.id = `userBox`;
document.getElementById("body").append(userBox);

var pravila = document.createElement("div");
pravila.innerHTML =
    `   
        <h3>Rules:</h3>
        <ul>
            <li>Answer only with one word,</li>
            <li>Begin word with a capital letter and</li>
            <li>Don't cheat 😉</li>
        </ul>
    `
document.getElementById("body").append(pravila);

const pitanja = [
    "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?",
    "If there are four sheep, two dogs and one herds-men, how many feet are there?",
    "What kind of goose fights with snakes?",
    "You answer me, although I never ask you questions. What am I?",
    "I am wet when drying. What am I?",
    "What word is always pronounced wrong?"
];

const odgovori = [
    "Noon",
    "Two",
    "Mongoose",
    "Telephone",
    "Towel",
    "Wrong"
];

for (var i = 0; i < pitanja.length; i++) {
    var pitanjeBox = document.createElement("div");
    pitanjeBox.innerHTML += `<h4>Question ${i + 1}: ${pitanja[i]}</h4>`;
    var poruka = document.createElement("p");
    pitanjeBox.append(poruka);
    poruka.id = `pitanje${i}`;
    poruka.classList.add("poruka");
    document.getElementById("body").append(pitanjeBox);
    pitanjeBox.innerHTML +=
        `
        <input type="text" name="odgovor${i}" id="odgovor${i}">
        <button onclick="myFunction()">Answer</button>
        <br>
    `;

    var resenje = document.createElement("p");
    resenje.innerText = `${odgovori[i]}`;
    pitanjeBox.append(resenje);
    resenje.classList.add("resenjeHide");
    resenje.id = `resenje${i}`;

    function myFunction() {
        for (var i = 0; i < pitanja.length; i++) {
            if (document.getElementById(`odgovor${i}`).value === odgovori[i]) {
                document.getElementById(`pitanje${i}`).innerHTML = `<p>Correct!</p>`;
            } else if (document.getElementById(`odgovor${i}`).value === "") {
                document.getElementById(`pitanje${i}`).innerHTML = ``;
            } else if (document.getElementById(`odgovor${i}`).value !== odgovori[i]) {
                document.getElementById(`pitanje${i}`).innerHTML = `<p>Wrong!</p>`;
            }
        }
    }
}



function showAnswers() {
    for (var i = 0; i < pitanja.length; i++) {
        if (document.getElementById(`resenje${i}`).classList.contains("resenjeHide")) {
            document.getElementById(`resenje${i}`).classList.remove("resenjeHide");
            document.getElementById(`resenje${i}`).classList.add("resenjeShow");
        } else if (document.getElementById(`resenje${i}`).classList.contains("resenjeShow")) {
            document.getElementById(`resenje${i}`).classList.remove("resenjeShow");
            document.getElementById(`resenje${i}`).classList.add("resenjeHide");
        }
    }
}


