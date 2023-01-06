import { model, Schema } from 'mongoose'

export const Money = model('Money', new Schema({
  totalOfDay: {
    type: Number,
    required: true
  },
  totalOfMonth: {
    type: Number,
    required: true
  }
}))