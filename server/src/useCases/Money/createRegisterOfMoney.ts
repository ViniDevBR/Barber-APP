import { Request, Response } from 'express'
import { Money } from '../../Models/Money'

export async function createRegisterOfMoney(req: Request, res: Response) {
  try {
    const { totalOfMonth, totalOfDay } = req.body

    await Money.create({ totalOfMonth, totalOfDay })

    res.sendStatus(201)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}