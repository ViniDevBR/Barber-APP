import { Request, Response } from 'express'
import { Services } from '../../Models/Services'

export async function createService(req: Request, res: Response) {
  try {
    const { name, price, icon } = req.body

    if(!name || !icon || !price) {
      return res.sendStatus(400).json({
        error: 'There is missing something REQUIRED!!!'
      })
    }

    const newService = await Services.create({
      icon,
      name,
      price
    })

    res.status(201).json(newService)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}