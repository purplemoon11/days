import express from 'express';
import { createConnection } from 'typeorm';
const app = express();
import env from "dotenv";

env.config();

createConnection({
    type: "mysql",
    database: "student",
    username: "root",
    password: "",
    logging: true,
    synchronize: true,
})
.then(()=>{
    console.log("databas connected successfully!!!")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`)
})