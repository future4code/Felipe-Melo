import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import * as bcrypt from "bcryptjs";






app.post('/users/signup', createUser)
app.post("/users/login", login)
app.put('/users', editUser)


const hash = async(s:string): Promise<string> =>{
const rounds = Number(process.env.BCRYPT_COST)
const salt = await bcrypt.genSalt(rounds)
const result = await bcrypt.hash(s, salt)
console.log("encrypted message :", result)
return result
}

const compare = async(s: string, hash: string): Promise<boolean>=>{
    return bcrypt.compare(s,hash)
}