import { Request, Response } from 'express'
import { Services } from '../../Models/Services'

export async function deleteServices(req: Request, res: Response) {
  try {
    const { id } = req.params
    await Services.findByIdAndDelete(id)

    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}