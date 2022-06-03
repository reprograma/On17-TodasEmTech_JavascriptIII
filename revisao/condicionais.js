const horario = 30;

// if...else

if (horario >= 0 && horario < 6) {
  console.log("madrugada");
} else if (horario >= 6 && horario < 12) {
  console.log("manhã");
} else if (horario >= 12 && horario < 18) {
  console.log("tarde");
} else if (horario >= 18 && horario < 24) {
  console.log("noite");
} else {
  console.log("horário inválido");
}
 
// operador condicional ternário

horario < 18 ? console.log('dia') : console.log('noite')

// resolvendo o problema anterior com stwich/case

switch (horario >= 0 && horario < 6) {
  case true:
    console.log("madrugada")
    break
  case false:
    switch (horario >= 6 && horario < 12) {
      case true:
        console.log("manhã");
        break
      case false:
        switch (horario >= 12 && horario < 18) {
          case true:
            console.log("tarde");
            break
          case false:
            switch (horario >= 18 && horario < 24) {
              case true:
                console.log("noite");
                break
              case false:
                console.log("horário inválido");
          }
      }
  }
}

// outra solução com switch/case:

switch (horario) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("madrugada")
    break
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    console.log("manhã")
    break
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log("tarde")
    break
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    console.log("noite")
    break
  default:
    console.log("horário inválido");
}

// switch/case em um caso em que é uma boa solução

let regiao = "noroeste";

switch (regiao) {
  case "nordeste":
    console.log("possui 9 estados");
    break;
  case "norte":
    console.log("possui 7 estados");
    break;
  case "centro-oeste":
    console.log("possui 3 estados e DF");
    break;
  case "sudeste":
    console.log("possui 4 estados");
    break;
  case "sul":
    console.log("possui 3 estados");
    break;
  default:
    console.log('região inexistente no Brasil');
}
