console.log("Hello, Word")

type carro ={
    marca : string,
    volumeTanque: number,
    flex:true

}



const carro.mustang ={
    marca: "ford",
    volumeTanque:"55",
    flex: true
}

const fusca ={
    marca: "volksvagem",
    volumeTanque: 55,
    flex: true
}

const minhaString: number | string | boolean = 50

const personBase ={
    nome = String,
    idade = Number ,
    cor= String
}

let Car={
    marca = String,
    ano = Number,
    cor = String
}

var cor;
(function (cor) {
    cor["VERMELHO"] = "Vermelho";
    cor["LARANJA"] = "Laranja";
    cor["AMARELO"] = "Amarelo";
    cor["VERDE"] = "Verde";
})(cor || (cor = {}));


function obterEstatisca(numeros){
    const numerosOrdenados =numeros.sort(
        (a, b)=> a -b
    )
        let soma =0 
        for (let num of numeros){
            soma+=num
        }

        const estatistica ={
            maior: numerosOrdenados[numeros.length -1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }

        return estatistica


}
 console.log(estatistica) 


/* ------------------------------------------------------------------------------------

/* 
function buscarCarrosPorMarca(frota: carro[], marca?: string):{
    if(marca ===undefined){
        return frota
    }
    return frota.filter{
        (carro) =>{
            return carro.marca === marca

        }
    }
} */