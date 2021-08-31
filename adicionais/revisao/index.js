// EXERCICIO 01

// const nomeDoProduto = prompt  ("qual o nome do produto?")
// let precoDoProduto = prompt ("qual o valor do produto?")

//  precoDoProduto = precoDoProduto -1 

// console.log(` o nome do produto é ${nomeDoProduto} e custa ${precoDoProduto} reais `)

 // EXERCICIO 2 -------------------------------------------------------


// const num1 = Number (prompt("insira um numero"))
// const num2 = Number (prompt("insira outro numero"))


// console.log(`seus numeros são num1 ${num1} e num2 ${num2}`)
//  console.log("Soma", num1 + num2)
//  console.log("Subtrai", num1 - num2)
//  console.log("Multiplica", num1 * num2)
//  console.log("divisão", num1 / num2)
//  console.log("Resto da divisão",num1 % num2)


// EXERCICIO 3 ---------------------------------------------------------


// const numeroSorteado = Math.floor(Math.random() * 10) +1
// const numeroRecebido = Number(prompt("insira um numero entre 1 e 10 "))


// console.log(`o numero sorteado foi ${numeroSorteado}`)

// if(numeroRecebido === numeroSorteado){
//     console.log("o numero é igual o sorteado")
// }else if(numeroRecebido < numeroSorteado){
//     console.log("o numero é menor do que o numero sorteado")
// }else if(numeroRecebido > numeroSorteado){
//     console.log("o numero é maior do que o numero sorteado")
// }




//EXERCICIO 4-----------------------------------------------------------

// const idade = Number(prompt("digite sua idade"))
// const altura = Number(prompt("digite sua altura em centimetros"))
// const temProblemaCardiaco = prompt("voce tem problema cardiaco ? S/N ?").toUpperCase()

// if(idade >= 18 && altura > 1.60 && temProblemaCardiaco === "N"){
//     console.log("pode entrar")
// }else{
//     console.log("nao pode entrar")
// }


//EXERCICIO 5-----------------------------------------------------------


// const frase = "hoje eu vou comer cenoura, ebaa"

// console.log(frase, frase.length)
// console.log(frase.toLowerCase())
// console.log(frase.toUpperCase())


//const retornaNumerosParesElevadosADois 
// const arrayDePares = ["2, 4, 6, 8"]

// function retornaNumerosParesElevadosADois(array) {
  
//   arrayDePares = arrayDePares.length ** 2
//   return arrayDePares;
// }
// retornaNumerosParesElevadosADois()


const maiorNumero = 50 

if(maiorNumero >= 50){
  console.log( "maior numero")
}else{
    console.log("menor numero")
}