const number = 5;
const result1 = number.toString(2); // Muudame numbri 5 binaarsüsteemi
console.log("1. Numbri 5 binaarkood: " + result1); // Väljasta tulemus


//////////////////////////////////// FAX FAX FAX FAX

/* Meil on 6
6/2 = 3, jääk 0
3/2 = 1, jääk 1
1/2 = 0, jääk 1
110 = 0       0
*/

//////////////////////////////////// FAX FAX FAX FAX


const number2 = 6;
const result2 = number2.toString(2); // Muudame numbri 6 binaarsüsteemi
console.log("2. Numbri 6 binaarkood: " + result2); // Väljasta tulemus


const a = 110;
const result3 = parseInt(a, 2); // Muudame binaarkoodi 110 kümnendsüsteemi
console.log("3. Binaarkoodi 110 kümnendsüsteem: " + result3); // Väljasta tulemus


const binary = "1010";
const result4 = parseInt(binary, 2); // Muudame binaarkoodi 1010 kümnendsüsteemi
console.log("4. Binaarkoodi 1010 kümnendsüsteem: " + result4); // Väljasta tulemus


const number3 = 0;
const result5 = number3.toString(2); // Muudame numbri 0 binaarsüsteemi
console.log("5. Numbri 0 binaarkood: " + result5); // Väljasta tulemus



//Teisendage kümnendsüsteemist binaarsüsteemi
//110  6871  58  188714

const number110 = 110;
const resultÜL1 = number110.toString(2); // Muudame numbri 110 binaarsüsteemi
console.log("ÜL1. Numbri 110 binaarkood: " + resultÜL1); // Väljasta tulemus
const number6871 = 6871;
const resultÜL1_1 = number6871.toString(2); // Muudame numbri 6871 binaarsüsteemi
console.log("ÜL1_1. Numbri 6871 binaarkood: " + resultÜL1_1); // Väljasta tulemus
const number58 = 58;
const resultÜL1_2 = number58.toString(2); // Muudame numbri 58 binaarsüsteemi
console.log("ÜL1_2. Numbri 58 binaarkood: " + resultÜL1_2); // Väljasta tulemus
const number188714 = 188714;
const resultÜL1_3 = number188714.toString(2); // Muudame numbri 188714 binaarsüsteemi
console.log("ÜL1_3. Numbri 188714 binaarkood: " + resultÜL1_3); // Väljasta tulemus

//Vastupidi teisendage binaarsüsteemist kümnendsüsteemi
//1001  01100101  10100111  101110111101

const binary1001 = "1001";
const resultÜL2 = parseInt(binary1001, 2); // Muudame binaarkoodi 1001 kümnendsüsteemi
console.log("ÜL2. Binaarkoodi 1001 kümnendsüsteem: " + resultÜL2); // Väljasta tulemus
const binary01100101 = "01100101";
const resultÜL2_1 = parseInt(binary01100101, 2); // Muudame binaarkoodi 01100101 kümnendsüsteemi
console.log("ÜL2_1. Binaarkoodi 01100101 kümnendsüsteem: " + resultÜL2_1); // Väljasta tulemus
const binary10100111 = "10100111";
const resultÜL2_2 = parseInt(binary10100111, 2); // Muudame binaarkoodi 101001１１ kümnendsüsteemi
console.log("ÜL2_2. Binaarkoodi 10100111 kümnendsüsteem: " + resultÜL2_2); // Väljasta tulemus
const binary101110111101 = "101110111101";
const resultÜL2_3 = parseInt(binary101110111101, 2); // Muudame binaarkoodi 101110111101 kümnendsüsteemi
console.log("ÜL2_3. Binaarkoodi 101110111101 kümnendsüsteem: " + resultÜL2_3); // Väljasta tulemus



