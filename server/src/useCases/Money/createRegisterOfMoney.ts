import { Request, Response } from 'express'
import { Money } from '../../Models/Money'

export async function createRegisterOfMoney(req: Request, res: Response) {
  try {
    const { totalOfMonth, totalOfDay } = req.body

    const money = await Money.create({ totalOfMonth, totalOfDay })

    res.send(201).json(money)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}