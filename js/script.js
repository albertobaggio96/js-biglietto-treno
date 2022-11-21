const userKm= parseInt(prompt("Quanti km vuoi percorrere?"))

const userAge= parseInt(prompt("Quanti anni hai?"))

const euroKm= 0.12

let ticketCost= userKm * euroKm

console.log(ticketCost)

document.getElementById("output").innerHTML= `Il tuo biglietto costa ${ticketCost}&euro;`