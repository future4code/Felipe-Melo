// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
  }
  
  // EXERCÍCIO 0B
  function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  
  // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
  
  // EXERCÍCIO 01
  function calculaAreaRetangulo(altura, largura) {
    // implemente sua lógica aqui
   const altura  = prompt('insira um valor aqui')
   const largura = prompt('insira um valor aqui')
    
    console.log(altura * largura)
  
  }        
  
  // EXERCÍCIO 02
  function imprimeIdade() {
    // implemente sua lógica aqui
    const ano =  prompt('qual o ano atual?')
    const ano_nasc = prompt('qual seu ano de nascimento')
  
    console.log(ano - ano_nasc)
  
  }
  
  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    const peso = prompt('qual seu peso atual?')
    const altura = prompt('qual a sua altura?')
    const imc = peso / (peso * altura)
  
    calculaIMC (85, 1.76)
  }
  
  // EXERCÍCIO 04
  function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome =  prompt('Qual seu nome?')
    const idade = prompt('Qual a sua idade?')
    const email = prompt('Qual seu email?')
  
    console.log(`meu nome é ${nome} tenho ${idade}anos e meu email é ${email}`)
  
  
  
  
  }
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt('Quai sua cor numero 1?')   
    const cor2 = prompt('qual su acor numero 2?')
    const cor3 = prompt('qual sua cor numero 3?')
   
   
    console.log ('Sua cores favoritas são',cor1, cor2, cor3)
  
  }
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    const nomeUsuario = prompt('digite uma frase!')
    const nomeMaiusculo = nomeUsuario.toUpperCase()
   // console.log(nomeUsuario.toUpperCase())
  
  
  }
  
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    const custo = 3000
    const valorIngresso = 100
   
  
    const calculaIngressosEspetaculo = custo/valorIngresso
  
  }
  
  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
  
  }