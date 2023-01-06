import { Request, Response } from 'express'
import { Money } from '../../Models/Money'

export async function updateMoney(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { totalOfMonth, totalOfDay } = req.body
    
    await Money.findByIdAndUpdate(id, { totalOfMonth, totalOfDay })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}