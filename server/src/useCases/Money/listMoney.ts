import { Request, Response } from 'express'
import { Money } from '../../Models/Money'

export async function listMoney(req: Request, res: Response) {
  try {
    const money = await Money.find()

    res.json(money)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}