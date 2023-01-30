//EXPRESS & NODE
import 'dotenv/config'
import express from 'express'
import { router } from './router'
import cors from 'cors'
//MONGO
import mongoose from 'mongoose'


const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL!)
  .then(() => {

    app.use(cors())
    app.use(express.json())
    app.use(router)

    app.listen(process.env.APP_PORT, () => {
      console.log('SERVER ONLINE MONSTÃO - PORTA -->', process.env.APP_PORT)
    })
  })
  .catch(() => console.log('MONGO FALHOU'))