//EXPRESS & NODE
import express from 'express'
import { router } from './router'
import cors from 'cors'
//MONGO
import mongoose from 'mongoose'


//npm run dev
const app = express()

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = 4444

    app.use(cors())
    app.use(express.json())
    app.use(router)

    app.listen(port, () => {
      console.log('SERVER ONLINE MONSTÃO')
    })
  })
  .catch(() => console.log('MONGO FALHOU'))