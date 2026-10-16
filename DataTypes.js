//Andmetüüp ja andmestruktuurid

let Age = 25; // Number
//let Number number <- (Javas on see muutuja)
console.log("1. Type of age: " + typeof Age); // Väljasta andmetüüp

const Myname = "Sigmund Freud"; // String ehk tekst
console.log("2. Type of name: " + typeof Myname); // Väljasta andmetüüp

const IsGreaterThan = 10 > 4;
console.log(" 3. Type of IsGreaterThan: " + typeof IsGreaterThan); // Väljasta andmetüüp

//Muutuja ilma väärtuseta
let Answer;
console.log("4. Type of Answer: " + typeof Answer); // Väljasta andmetüüp

//Null väärtus
const NullVäärtus = null;
console.log("5. Type of NullVäärtus: " + typeof NullVäärtus); // Väljasta andmetüüp
console.log("Type of True: " + (NullVäärtus === null)); // Kontrollime, kas väärtus on null

const bb = 5;
const cc = "5";
console.log(`6. Type of bbc ${bb} (${typeof bb}); "${cc}" (${typeof cc})`);

//Võrdleme arvude ja stringide liitmist

console.log(5+5); //Numbrite liitmine
console.log("5" + "5"); //Stringide liitmine, aga string kõlab nagu aluspesu nii et kutsume "Tekst"

//Teisendamine
const tekst = String(25); //Teisendame numbri 25 tekstiks
console.log("7. Type of tekst: " + typeof text); // Väljasta andmetüüp
console.log("Value:", tekst); // Väljastab Väärtuse/Numbri
console.log("Type:", typeof tekst); // Väljastab Stringi/Teksti


//Objektid ja Massiivid
const Student = {
    name: "Freddy Fazbear",
    age: 20
}   
console.log(Student.name); // Väljastab objekti omadus "name"
console.log(Student.age); // Väljastab objekti omadus "age"

const Student2 = {
    name: "Freddy Kreuger",
    age: 22
};
Student2.age = 23; // Muudame objekti omadus "age" väärtust
Student2.school = "High School"; // Lisame uue omaduse "school" objekti Student2
console.log(Student2.name, Student2.age, Student2.school); // Väljastab objekti omadused

//Massiiv
const Hinded = [5, 4, 3, 2, 1]; // Loome massiivi Hinded

console.log("Hinded: " + Hinded[0]); // Väljastab massiivi esimese elemendi
console.log("Hinded: " + Hinded[1]); // Väljastab massiivi esimese elemendi
console.log("Hinded: " + Hinded[2]); // Väljastab massiivi esimese elemendi
//  jne  //
console.log("");
console.log(Array.isArray(Hinded)); // Kontrollib kas "Hinded" on massiiv

//Pesastatud Objekt
const Student3 = {
    name: "Freddy Mercury",
    address: {
        city: "New Fork",
        zip: "WinRar"
    }
};
console.log(Student3.name, Student3.address.city, Student3.address.zip); //Väljastab andmed

//Set
const Colors = ["red", "yellow", "blue", "red", "green", "green", "red"]; //Massiiv
const NewColors = new Set(Colors); // Loome unikaalsete värvide komplekti
console.log("Unikaalsed Värvid: " + Array.from(NewColors)); //Loetle Unikaalsed Värvid
console.log(NewColors.has("blue")); //Kontrollime kas massiivis on "blue"
console.log(NewColors.size); //Väljastab komplekti suuruse


/*Ülesanne: Looge automarkide massiiv, milles on korduvaid elemente.
//Leidke Set abil unikaalsed elemendid ja väljastage need konsooli.
Leidke massiivi suurus enne ja pärast Set loomist.
*/

const Carr = ["Toyota", "Toyota", "BMW", "Toyota", "Toyota"]
console.log("Massiivi suurus: " + (Carr.length));
const UnikaalsedAutod = new Set(Carr);
console.log("Unikaalsed Autod: " + Array.from(UnikaalsedAutod));
console.log("Massiivi suurus: " + UnikaalsedAutod.size);