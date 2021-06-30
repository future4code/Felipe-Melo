/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log ("Boas Vindas ao jogo Blackjack")
let  inicioDeJogo = confirm("Deseja iniciar uma nova rodada? ")
if (inicioDeJogo){
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartacomputador = comprarCarta()
   let cartacomputador2 = comprarCarta()   


   const somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   const somaComputador = cartacomputador.valor + cartacomputador2.valor

   //     console.log(somaUsuario)
   //     console.log(somaComputador)

      // console.log(cartaUsuario1.texto + cartaUsuario2.texto)
      // console.log(cartacomputador.texto + cartacomputador2.texto)

      // console.log(somaUsuario)
      // console.log(somaComputador)

console.log(`usuario - cartas = ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${somaUsuario}`)

console.log(`computador - cartas = ${cartacomputador.texto} ${cartacomputador2.texto} - ${somaComputador}`)


if(somaUsuario > somaComputador){
   console.log("Usuario Ganhou!")
}else if(somaUsuario < somaComputador){
   console.log("Computador Venceu")
}


  
}else{
   console.log("O jogo acabou")
}
  
