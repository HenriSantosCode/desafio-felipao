// Desafio: Classificador de nível de Heroi

// 1. Declarar as variáveis 
let nomeHeroi = "Henri";
let xpHeroi = 8400;
let nivel = ""; 

// 2. Classificação de acordo com o XP 

if(xpHeroi < 1000){
    nivel = "Ferro";
}else if(xpHeroi <= 2000){
    nivel = "Bronze";
}else if(xpHeroi <= 5000){
    nivel = "Prata";
}else if(xpHeroi <= 7000){
    nivel = "Ouro";
}else if(xpHeroi <= 8000){
    nivel = "Platina";
}else if(xpHeroi <= 9000){
    nivel = "Acendente";
}else if(xpHeroi <= 10000){
    nivel = "Imortal";
}else{
    nivel = "Radiante"; 
}

// 3. Exibir a saída 
console.log("O Herói de nome " + nomeHeroi, "está no nivel " + nivel); 




