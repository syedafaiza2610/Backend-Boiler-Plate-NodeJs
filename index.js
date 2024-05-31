import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js"
import mongoose from "mongoose";
import ENV from "../Boiler plate/src/constants/index.js";
import chalk from "chalk";
const app = express(); 
app.use(express.json())  // middleware

app.use(helmet());
mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@clustor1.jukqksg.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=Clustor1`)
mongoose.connection.on("connected" , ()=>{
    console.log(chalk.yellow("Database Connected"))
})

app.get("/" ,(req ,res) =>{
    res.send("Hellow World")
})

app.use("/api" , routes ) //api pe req ayegi wo humy routes pe le jaega
const port = ENV.port || 3000;
 
app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
})