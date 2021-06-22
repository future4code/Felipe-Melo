// const meuPet = {
//     nome: 'pity',
//     cor: 'branca',
//     raça: 'vira-lata',
//     gostos: ["ossinho","ração"],
 
// }
// console.log( 'nome do pet é ', meuPet.nome)

// const felipe = {
//     nome: "Felipe",
//     idade: 25,
//     generoMusical: "tudo"
// }
// console.log("meu nome é ", felipe.nome, "e tenho ",felipe.idade, "e gosto", felipe.generoMusical)

// const donoDoPet = {
//     nome: 'felipe',
//     gostosMusicais:'rock',
//      pet:  {
    
//     nome:'pepe',
//     tipo:'cachorra',
//      }
// }
// console.log('eu sou',donoDoPet.pet.nome)


//--------EXERCICIOS------------------------------------------------

// const pessoa = {
//     nome: 'Felipe',
//     apelidos: ['Fe','Felipinho','Fezinho']

// }

// console.log('eu sou ', pessoa.nome,  'mas conhecido como', pessoa.apelidos[1])


//--------------------------------------------------------------------


// const pessoa = {
//     nome:'Felipe',
//     idade:'25',
//     profissao:'desenvolvedor'
// }
// const pessoa2 = {
//     nome:'maria',
//     idade:'22',
//     profissao:'médica'
// }
// const recebeObjeto = (pessoa, pessoa2)=>{
//     console.log (pessoa.nome, pessoa2.nome.length, pessoa.idade.length, pessoa.profissao.length)
// }
// recebeObjeto( pessoa, pessoa2)
   

//----------------------------------------------------------------------

// const carrinho = []

// const frutas ={
//     nome:'banana',
//     disponibilidae: true,
// }
// const frutas1 = {
//     nome:'uva',
//     disponibilidade: true,
// }
// const frutas2 ={
//     nome:'maça',
//     disponibilidade: true
// }
// const recebeFrutas = (frutas, frutas1, frutas2) => {
//     carrinho.push(frutas, frutas1, frutas2)
// }
// recebeFrutas(frutas, frutas1,frutas2)
// console.log(carrinho.length)

//----------------------------------------------------------------------
// ----------------DESAFIOS---------------------------------------------


// const pergunteAoUsuario =  
//     nome = prompt('Qual seu nome?')
//     idade = Number(prompt ('Qual a sua idade?'))
//     profissao =  prompt ('Qual a sua profissão?')

//     console.log('eu sou ',nome,'tenho ',idade,'anos e trabalho como',profissao)


//----------------------------------------------------------------------

const filmes ={
    nome: 'Avatar',
    anoDeLançamento: 2015, 
    disponibilidade: true
}
const filmes2 ={
    nome: 'Vingadores',
    anoDeLançamento: 2019, 
    disponibilidade: false
}
 function lançamentoDeFilmes(filmes, filmes2)  {
    console.log('o primeiro filme foi lançado antes do segundo?',filmes.disponibilidade)
    console.log('o primeiro filme foi lançado no mesmo ano?',filems2.disponibilidade)
 }
 lançamentoDeFilmes(filmes, filmes2)