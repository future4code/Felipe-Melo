import {Request, Response} from "express"
import { idGenerator } from "../services/idGenerator"

export async function signUp(req: Request, res:Response){
    try{
        const{name, email,password, role}= req.body

        
        if(!name|| !email || !password || !role){
            res.status(422).send("insira corretamente as informações de 'name','email','password','role'")
        }
        const idGenerator = new idGenerator()
        const id = idGenerator.generate()
    }catch(error){
        res.status(400).send(error.message)
    }
}