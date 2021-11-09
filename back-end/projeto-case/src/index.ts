import { app } from './app'


// EndPoint para testarmos servidor 
//(pode e deve ser deletado na hora de entregar o case)
app.get('/ping', (req, res) => {
    try {
        res.send('pong')
    } catch (error: any) {
        console.log(error.message)
    }
})

app.get("/pokemonGo")

app.post("/pokemonGo")