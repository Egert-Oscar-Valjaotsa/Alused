//Function on nimega kaskude kogum, mis taidab kindlat ulesannet
//Funktsioonid aitavad meil koodi korrastada ja taaskasutada

function sayHello() {
    console.log("Tere!");
}

sayHello(); //Kutsume esile funktsiooni "WITH THIS TREASURE I SUMMON"

//2. Parameetrid ja argumendid
function greet(name) {
    console.log("Tere, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

//3. Tagastamine ehk return
//return tagastab tulemuse ja l6petab funktsiooni taitmise
function add(a, b) {
    return a + b;
}
const result = add(5, 10);
console.log("Summa on: " + result);

//4. Funktsionaalne avaldis (Function Expression)
const multiply = function (a, b) {
    return a * b;
}
const product = multiply(5, 10);
console.log("Toode on " + product);

//5. Arrow function
const divide = (a, b) => {
    return a / b;
}
const quotient = divide(10, 2);
console.log("Jagatis on: " + quotient);

//Ylesanne
function ruut(num) {
    return num * num;
}
const ruudus = ruud(5);
console.log("Ruut on: " + ruudus)
