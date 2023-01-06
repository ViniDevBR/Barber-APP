import { Request, Response } from 'express'
import { Clients } from '../../Models/Clients'

export async function deleteClient(req: Request, res: Response) {
  try {
    const { id } = req.params
    await Clients.findByIdAndDelete(id)

    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}