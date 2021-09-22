import express from "express"
import cors from "cors"

const app =express()

app.use(cors())
app.use(express.json())

app.listen(3005,()=>{
    console.log("sucesso")
})

 app.get('/test',(req:Request, res: response )=>{
    if(req.headers.chave === "banana"){
        res.send("a chave é banana ")
    }else{
        res.send("chave errada")
    }
})

app.get('/countries',(req:Request, res: Response)=>{
    const result = countries.find((country)=> country.id === Number(req.params.id))

    if(result){
        res.send(result)
    }else{
        res.status(404).send("não encontrado")
    }
})   

console.log("countries") 