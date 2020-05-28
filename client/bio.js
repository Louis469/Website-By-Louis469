const name = prompt("Whats your name?");
const birth_date = prompt("Whats your birth date? (in format like 8/8/20)");

let notes = document.createElement("p");
notes.textContent = name + " was born in " + birth_date + ".";
document.body.appendChild(notes);
