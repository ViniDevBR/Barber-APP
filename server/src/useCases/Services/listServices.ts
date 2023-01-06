import { Request, Response } from 'express'
import { Services } from '../../Models/Services'

export async function listServices(req: Request, res: Response) {
  try {
    const services = await Services.find()

    res.json(services)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}