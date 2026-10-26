//If else, else if

//if v6imaldab meil teha otsuseid, kui tingimused on t6esed, siis kaivitub if plokk, kui tingimused on vaar kaivitub else plokk

//if taidab looksulgudes {} oleva ploki, kui tingimused on t6ene, kui tingimus on vaar, siis plokk if jaetakse vaheleasdasdasasd
const age = 17;
if (age >= 18) {
    console.log("Taiskasvanu.");
} else {
    console.log("Noor.");
}

//2.
const points = 75;
if (points >= 90) {
    console.log("Suurep'rane!");
} else if (points >= 50) {
    console.log("Arvestatud!");
} else {
    console.log("Proovi uuesti.");
}

//3.
const hasTicket = true;
const hasInvite = false;
const isBlokk = false;
if ((hasTicket || hasInvite) && !isBlokk)) {
    console.log("Sissepaas olemas.");
}

//Ulesanne
const number = 10;
if (number = 2 || 4 || 6 || 8 || 10) {
    console.log("Paaris");
} else {
    console.log("Ei ole paaris");
}
//6igem variant
if (number % 2 === 0) {
    console.log("Nummer paaris");
} else {
    console.log("nummer paaritu");
}
