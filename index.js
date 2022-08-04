let hatPrice = 100;
console.log(`Cena czapki: ${hatPrice}`);

let bootsPrice = "100";
console.log(`Cena butów: ${bootsPrice}`);

if(hatPrice === bootsPrice){
  console.log('Ceny są takie same');
} else {
  console.log('Ceny są różne');
}

let totalPrice = Number(hatPrice) + Number(bootsPrice);      //number uzywamy po to by przekonwertowac string na liczbe
console.log(`Kwota całkowita: ${totalPrice}`);

let myVariable = 'Adam';
console.log(`Typ: ${typeof myVariable}`);

myVariable = 100;                                            //nadpisalam myVariable
console.log(`Typ: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "Londyn";
console.log(`Miasto: ${secondCity}`);


