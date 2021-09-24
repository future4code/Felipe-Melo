import cors from 'cors'
import {AddressInfo} from 'net'
import express, {Request, Response} from 'express'

const app = express()
app.use (express.json())
app.use (cors())

type Users={
    id: number ,
    name: string,
    cpf: number,
    type: string,
    dataDeNascimento: number,
    saldo: number,
    extrato:""

}

let Users: Users[] = [
    {
        id: 1,
        name: "felipe",
        cpf: 123-456-455-10,
        type: "ADMIN",
        dataDeNascimento: 25,
        saldo: 100,
        extrato: ""
    },
    {
        id: 2,
        name: "fulano",
        cpf: 456-789-525-50,
        type: "NORMAL", 
        dataDeNascimento: 26,
        saldo: 200,
        extrato:""
    },
    {
        id: 3,
        name:"beltrano",
        cpf: 789-546-235-20,
        type: "NORMAL",
        dataDeNascimento: 30,
        saldo: 300,
        extrato:""
    }
]


app.get ('.users/',(req: Request, res: Response)=>{

})

app.post('.users/',(req: Request, res: Response)=>{

})

app.patch('/users',(req:Request, res: Response)=>{
    let codeError:Number = 400
    try{
     /*  const id =req.body.id
      const name =req.body.name */
      const{id, name,email, type, dataDeNascimento, saldo, extrato }= req.body

      if(!id || !name || !email || !type || !dataDeNascimento || !saldo || !extrato){
       let errorCode = 422
        throw new Error('please check the fields!')
        
      }
      

  const server = app.listen(process.env.PORT || 3003,()=>{
        if(server){
            const addres =server.addres() as AddressInfo
            console.log(`server is running in http://localhost:${Address.port}`)
        }else{
            console.log(`failure upon starting server`)
        })

    })