import { model, Schema } from 'mongoose'

export const Services = model('Services', new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}))