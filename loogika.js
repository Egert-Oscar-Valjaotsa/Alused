//1. Laualaambi sissetülitamise doohickey
// Reegel: lamp põleb, kui elektrivool on olemas ja lüliti on sisse lülitatud.

const PowerOn = true; // Elektrivool on olemas
const SwitchOn = true; // Lüliti on sisse lülitatud
const result = PowerOn && SwitchOn; // Kas lamp põleb?
console.log("1. Kas lamp põleb? " + result); // Väljasta tulemus

//2. Veebitunni avamine
//Reegel: Tunni avamiseks on vaja internetiühendust ja linki

//internetiühendus on olemas
const InternetOn = true; //Link on olemas
//link olemas
const HasLink = true
const result2 = InternetOn && HasLink; //Kontrollime, kas tunni saab avada
console.log("2. Kas veebitundi saab avada? " + result2); // Väljasta tulemus

// && - loogiline JA (AND) operaator //konjunktsioon
// || - loogiline VÕI (OR) operaator //disjunktsioon

//3. Ostu eest tasumine
//Reegel: Sularahas või pangakaardiga
const CashAvaivable = true; // Sularaha on olemas
const HasCard = true; //Pangakaart on olemas

const result3 = CashAvaivable || HasCard; //Kontrollime, kas saab tasuda
console.log("3. Kas saab tasuda? " + result3); // Väljasta tulemus

//4. Teate saamine
//Reegel: Teade on saadud, kui saabus e-kiri või SMS
const EmailReceived = true; // E-kiri on saabunud
const SMSReceived = false; // SMS on saabunud
const result4 = EmailReceived || SMSReceived; //Kontrollime, kas teade on saadud
console.log("4. Kas teade on saadud? " + result4); // Väljasta tulemus

//5. Akna avamine
//Reegel: Võib avada, kui vihma ei saja
const IsRaining = false; //Vihma ei saja
const result5 = !IsRaining; //Kontrollime, kas akent võib avada
console.log("5. Kas akent võib avada? " + result5); // Väljasta tulemus

//6. Serveri käivitamine
//Reegel: Vaja on sisselülitatud arvutit, paigaldatud OS ja käivitumis õigused
const ComputerOn = true; //Arvuti töööötab
const OSPaigas = true; //OS on timmm
const ÕigusedKa = false; //Kasutajal pole õigusi
const result6 = ComputerOn && OSPaigas && ÕigusedKa; //Nüüd töötab rrrraudselt
console.log("6. Kas server töötab? " + result6); // Väljasta tulemus

//7. Kooli Jõudmine
//Reegel: Kooli saab minna bussiga, jalgrattaga või autoga
const BusReal = false; //Lux Express sõitis kraavi
const BikeFake = true; //Uus kett pandi just peale
const CarLimbo = false; //Kütuse hinnad tõusid
const result7 = BusReal || BikeFake || CarLimbo; //Vaatame, kas kooli saab minna
console.log("7. Kas kooli saab minna? " + result7); // Väljasta tulemus


//8. Filmide vaatamine
//Reegel: Vaja on internetiühendust ning tellimust või ostetud veebiseanss
const Internett = false; //Internet pole olemas, bänger
const Netflix = true; //Netflix tellimus ainult 12€
const Sessssiiiooon = true; //Seanss olemas

const result8 = Internett && (Netflix || Sessssiiiooon); //Kontrollime, kas filmi saab vaadata
console.log("8. Kas filmi saab vaadata? " + result8); // Väljasta tulemus


//9. Piknik
//Reegel: Vaja on toitu ning kuiva ilma või katusega lehtlat
const Fuud = true; //Gross Goated
const VihmaTants = true; //Vihm hakkab märatsema
const Lehtla = false; //Ma ei tea mis Lehtla on
const result9 = Fuud && (VihmaTants || Lehtla); //Vaatame kas saame piknikule minna
console.log("9. Kas piknikule saab minna? " + result9); // Yessir


//10. Uuenduse alla laadimine
//Reegel: Vaja on internetiühendust ning kettaruumi
//Madal akutase koos ühendamata laadijaga ei luba alla laadida
const Indrek = true; //Indrek on elus
const Disk = true; //Kettatuum ea
const Low = true; //aaku lowwww
const Laadur = false; //Laadur ei lae
const result10 = Indrek && Disk && (!Low || Laadur); //Kontrollime, kas uuendust saab alla laadida
console.log("10. Kas uuendust saab alla laadida? " + result10); // Väljasta tulemus


//11. Valmis tellimuse kättesaamine
//Reegel: Tellimus peab olema valmis, kuller või väljastuspunkt saadaval ning väljastamine blokeerimata
const Telimus = true; //Telimus a-ok
const Kull = false; //Kuller on haiguslehel
const DeadDrop = true; //DeadDrop aastaid ette peidetud
const BLOCKED = false; //For the love of god get off Twitter
const result11 = Telimus && (Kull || DeadDrop) && !BLOCKED; // Kuller VÕI väljastuspunkt | Tellimus JA Blokeerimata
console.log("11. Kas tellimuse saab kätte? " + result11); // Väljasta tulemus
