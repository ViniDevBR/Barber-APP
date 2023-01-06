import { model, Schema } from 'mongoose'

export const Clients = model('Clients', new Schema({
  name: {
    type: String,
    required: true
  },
  services: {
    required: true,
    type: [{
      service: {
        type: Schema.Types.ObjectId,
        ref: 'Services'
      }
    }]
  },
  fidelity: {
    type: Boolean,
    default: false
  }
}))