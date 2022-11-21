let userKm= parseInt(prompt("Quanti km vuoi percorrere?"));

let userAge= parseInt(prompt("Quanti anni hai?"));

if ((isNaN(userKm)) || (isNaN(userAge))){
document.getElementById("output").innerHTML= `I dati inseriti non sono corretti, per favore ricarica la pagina!`;
}else{
  
  const euroKm= 0.21;
  
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
  
  document.getElementById("output").innerHTML= `Il tuo biglietto costa ${ticketCost.toFixed(2)}&euro;`;
}
