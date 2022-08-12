import express from "express";
import * as url from 'url';
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import stockRoutes from "./routes/stock.js"
 
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

dotenv.config({
    path: path.resolve(__dirname, './.env')
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true, }))
app.use(cors())

const PORT = process.env.PORT

app.use("/stock", stockRoutes)
app.get("/", (req, res) => {
    res.send("Hi")
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))