import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()
app.use(express.json())
app.use(cors())

type User = {
  id:    number,
  name:  string,
  email: string,
  type:  string,
  age:   number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]




// Para testar se o servidor está tratando os endpoints corretamente
/* app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.get('/users',(req:Request, res:Response)=>{
    let codeError: number= 400
    
  try{
      const name: string =req.query.name as string
      const user: user | undefined =users.find((user)=>user.name === name)
      if(!user){
        codeError = 404
        throw new Error('user not found')
      }
    }catch(error){
      res.status(codeError).send({message: error.message})
  } */

  
  app.get('/users',(req: Request, res: Response)=>{
  
  })
  app.post('/users',(req: Request, res:Response)=>{
  
  })

  app.patch('/users',(req:Request, res: Response)=>{
    let codeError:Number = 400
    try{
     /*  const id =req.body.id
      const name =req.body.name */
      const{id, name,email, type, age }= req.body

      if(!id || !name || !email || !type || !age){
       let errorCode = 422
        throw new Error('please check the fields!')
        
      }
      
      const newUser: user ={
        id, 
        name,
        email,
        type,
        age
      }

      users.push(newUser)


    }catch(error){
      res.status(errorCode).send({message: errorCode.messege})
    }
  } )
  
  
  
  const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
      const address =server.address() as AddressInfo;
      console.log(`server is runnig in http://localhost:${address.port}`)
  
    }else{
      console.error('failure upon starting server')
    }
  
  })
