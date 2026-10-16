// Variables ehk Muutuja

//Muutuja on väärtuse sildistus v mdea mida iganes lic Muutuja

let score_ = 0;  //Muutuja algväärtus on 0

let score;   //Ilma määrava väärtusega
score = 100;     //Määrame väärtuse
let age = 25;


let score1 = 0;
console.log("score enne: " + score1);
score1 = 50;
console.log("score pärast: " + score1);


const price = 3;
const DeliveryFee = 2;
const TotalCost = price + DeliveryFee;
console.log("Total Cost: " + TotalCost);


//Inkrement ja Dekrement (Increase ja Decrease)

let apples = 5
apples++;   //Suurendame muutuja väärtust 1x
++apples;   // Saab ka plussid ette panna
console.log("More Apples: " + apples);
apples--;   //Vähendame muutuja väärtust 1x
--apples;
console.log("Less Apples: " + apples);

// (Pluss) += (Võrdub)

let coins = 10
coins += 5;     //Suurendame muutuja väärtust Viiega
console.log("Coins: " + coins);

//Kuidas muuta muutuja väärtust

let a = 5;
let b = 10;
const temp = a;
a = b;
b = temp;
console.log("a: " + a )
console.log("b: " + b )

// Nähtavus (scope) - kus on muutuja nähtav

const value = 100; //Globaalne muutuja, nähtav kogu koodis
console.log("Global Value: " + value);
{
    const value = 200; //Kohalik- või Pesastatud Muutuja
    console.log("     Local Value: " + value);
}
console.log("Global Value: " + value);

//Ojekti omistamisel kopeeritakse ainult viide, mitte väärtus

const FirstObject = { Name: "Bomboclat" } ;
const SecondObject = FirstObject;
SecondObject.name = "Rasclat"; // muudame SecondObject omadust
console.log("First Object Name: " + FirstObject.Name);

//Kopeerimine väärtuse järgi

const FirstValue = {score: 100};
const SecondValue = {...FirstValue};
SecondValue.score = 200;
console.log("First Valude Score: " + FirstValue.score);
console.log("Second Valude Score: " + SecondValue.score);

// Massiiv on kindlas järjekorras olevate väärtuste kogum
//Index - iga väärtuse järjekorra number, mis algab 0-is

const numbers = [1, 2, 3, 4, 5];

// Asendame massiivi väärtuse
numbers[2] = 10; // Muudame kolmanda väärtuse sest [0] [1] [2]
console.log("Updated Number: " + numbers);

//Lisame massiivi väärtuse
numbers.push(6);
console.log("Numbers After Push: " + numbers);

//Eemaldame massiivi väärtuse
numbers.pop();
console.log("Numbers After Pop: " + numbers);

//forEach() Käivitab funktsioon iga massiivi väärtuse jaoks
numbers.forEach(function(number){
    console.log("Number: " + number); // Väljastab iga numbri massiivist
})

//map() Loob uue massiivi, kus iga väärtus on muudetud funktsiooni abil
const doubleNumbers = numbers.map(function(number) {
    return number * 2; //Korrutame iga numbri kahega
});
console.log("Doubled Numbers: " + doubleNumbers);

//Massiiv massiiviks
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log("First row, second column: " + table[0][1]);

// Ülesanne
/*
Teil on massiiv
[6, 3, 8 ,2 ,5]
Leidke massiivist esimene element ja viimane element
Asendage esimene element väärtusega 10 ja viimane väärtusega 20
Väljasta muudetud massiiv konsooli ja selle suurus
*/

const numbrid = [6, 3, 8 ,2 ,5];
console.log("Esimene Arv on: " + numbrid[0])
console.log("Viimane Arv on: " + numbrid[4])
numbrid[0] = 10;
numbrid[4] = 20;
console.log("Uued Numbrid: " + numbrid);
console.log("Massiivi Suurus: " + numbrid.length);
