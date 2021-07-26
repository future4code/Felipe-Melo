// const verificaImpar = (numero, imprimir)=>{
//     if(numero % 2 === 0){
//         imprimir()
//     }
// }

// const imprimeMensagem = (numero)=>{
//     console.log("sim, é par")
// }

// verificaImpar(20, imprimeMensagem)




// const arrayNumeros = [12, 10, 15, 5, 45]

// const multiplicaPor5 = (numero) =>{
//     return numero * 5
// }

// const resultado = arrayNumeros.map



//----------------------------------------------------------------------
//   EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1- foi impresso um array dentro de outro array dos  todos os usuarios cada vez que é 
// chamado 

//----------------------------------------------------------------------

//2- foi impresso um array simples

//----------------------------------------------------------------------

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// const novoArray = ((item)=>{
//     return item.nome
// })
// const nomePets = pets.map(novoArray)
// console.log(nomePets)

//----------------------------------------------------------------------


// const dogs = pets.filter((item, index) => {
//     return item.raca === "Salsicha"

// })

// console.log(dogs)


//----------------------------------------------------------------------

// const cupomDesconto = pets.filter((item, index) =>{
//     return item.raca === "Poodle"
// }).map((item) =>{ 
//     return`voce ganhou um cupom de 10% para tosar a  ${item.nome}`
// })
// console.log(cupomDesconto)


//--------------------EXERCICIO 2---------------------------------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]