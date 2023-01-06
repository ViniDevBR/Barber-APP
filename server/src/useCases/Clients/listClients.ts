import { Request, Response } from 'express'
import { Clients } from '../../Models/Clients'

export async function listClient(req: Request, res: Response) {
  try {
    const clients = await Clients.find().sort({ createdAt: 1 }).populate('services.service')

    res.json(clients)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}