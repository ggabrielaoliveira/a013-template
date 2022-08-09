let idadeDependente=15;

if(idadeDependente>=13){
    if(idadeDependente>=18){
        console.log("seu dependente ja pode ter um cartão proprio")
        
    }else{
        console.log("seu dependente pode ter um cartao vinculado ao seu")
    }
}else{
    console.log("consulte outras possibilidades do Labank")
}

//
if(idadeDependente>=13 && idadeDependente<=17){
    console.log("seu dependente pode ter um cartao vinculado ao seu")
}else{
    console.log("conslute outra possibilidade")
}
// TERNARIO
idadeDependente===13? console.log("a idade do dependente é 13 e ja pode ter um cartao"):
console.log("Cunsulte outra possibilidade");

// PARA GUARDAR NA CABEÇA
let numero= Number(prompt("Insira um numero"))


// if(numero%2==0){
//     console.log("numero divisivel por 2")
//     if(numero%3==0){
//         console.log("numero divisivel por 3")
//     }else{
//     console.log("numero nao divisivel por 3")}
// }else{
//     console.log("numero nao divisivel por 2 e 3")
// };
// // // 

if(numero%2==0 && numero%3==0){
    console.log("numero divisivel por 2 e 3")
    numero===30? console.log("uffa acertei"): console.log("não foi dessa vez")
 switch(numero){
     case 6:
            console.log("esse numero é 6");
            break;
    case 12:
            console.log("esse numero é 12");
            break;
    case 18:
            console.log("esse numero é 18");
            break;
    case 24:
            console.log("esse numero é 24");
            break;
    case 30:
            console.log("esse numero é 30");
            break;
    default:
            console.log("o numero é maior que 30 ou menor que 6");
}

}else{
    console.log("numero não divisivel por 2 e 3")};
