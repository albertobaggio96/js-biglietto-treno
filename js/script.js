let userKm= parseInt(prompt("Quanti km vuoi percorrere?"));

if (isNaN(userKm)){
  userKm = parseInt(prompt ("Per favore, indicare i km usa solo numeri arabi, Grazie"));
}

let userAge= parseInt(prompt("Quanti anni hai?"));

if (isNaN(userAge)){
  userKm = parseInt(prompt ("Per favore, indicare la tua età usa solo numeri arabi, Grazie"));
}

const euroKm= 0.12;

let ticketCost= userKm * euroKm;

console.log("Prezzo intero");
console.log(ticketCost);


if (userAge < 18){
  console.log("Prezzo per minorenni")
  ticketCost= ticketCost * 80 / 100;
} else if (userAge > 65){
  console.log("Prezzo per over 65")
  ticketCost= ticketCost * 60 / 100;
}else{
  console.log("Ti tieni il prezzo intero");
}
console.log(ticketCost);

document.getElementById("output").innerHTML= `Il tuo biglietto costa ${ticketCost}&euro;`;