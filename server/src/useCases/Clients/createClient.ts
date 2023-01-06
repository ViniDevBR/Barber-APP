import { Request, Response } from 'express'
import { Clients } from '../../Models/Clients'

export async function createClient(req: Request, res: Response) {
  try {
    const { name, services, fidelity } = req.body

    const newClient = await Clients.create({ name, services, fidelity })

    res.status(201).json(newClient)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}