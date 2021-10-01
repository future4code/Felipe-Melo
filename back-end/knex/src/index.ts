import express,{Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./conection";






const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async(req, res)=>{
  const result = await connection.raw("show tables")
  console.log(result)

  res.send("hello from express")
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


