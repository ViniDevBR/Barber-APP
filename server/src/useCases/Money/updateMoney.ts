import { Request, Response } from 'express'
import { Money } from '../../Models/Money'

export async function updateMoney(req: Request, res: Response) {
  try {
    const { totalOfDay, totalOfMonth } = req.body

    await Money.updateMany({ totalOfDay, totalOfMonth })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}