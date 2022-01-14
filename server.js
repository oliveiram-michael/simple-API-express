import express from "express"
import cors from 'cors'
import Rotas from './src/Routes/index.js'
const app = express()

Rotas(app)
app.use(cors())
app.use(express.json())
app.listen(3334, () => { console.log(`Rodando ${3334}`) })