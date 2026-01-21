// Declarando Variáveis

let heroi = "DevMaRoBa"
let xp = 10001
let nivel_1 = "Ferro"
let nivel_2 = "Bronze"
let nivel_3 = "Prata"
let nivel_4 = "Ouro"
let nivel_5 = "Platina"
let nivel_6 = "Ascendente"
let nivel_7 = "Imortal"
let nivel_8 = "Radiante"

// Estrutura de Decisão usando if , else if e else para encontrar o nivel que o heroi se encontra.

if(xp < 0){
    console.log("Nível inválido")
}else if(xp <= 1000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_1)
}else if(xp > 1000 && xp <= 2000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_2)
}else if(xp > 2000 && xp <= 5000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_3)
}else if(xp > 5000 && xp <= 7000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_4)
}else if(xp > 7000 && xp <= 8000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_5)
}else if(xp > 8000 && xp <= 9000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_6)
}else if(xp > 9000 && xp <= 10000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_7)
}else{
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel_8)
}
