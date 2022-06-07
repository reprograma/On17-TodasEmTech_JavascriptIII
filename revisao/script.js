const horario = 10

if(horario >= 0 && horario < 6) {
    console.log("madrugada")
} else if (horario >= 6 && horario <12) {
    console.log("manhã")
} else if (horario >= 12 && horario <18) {
    console.log("tarde");
} else if (horario >= 18 && horario <24){
    console.log("noite");
} else {
    console.log("horario invalido");
}

switch (horario) {
  case 0: 
  
}