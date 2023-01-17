import { IClient, ISelects } from '../@types/Clients'

export const services: ISelects[] = [
  {
    _id: '1',
    name: 'Cabelo',
    price: 25,
    icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
  },
  {
    _id: '2',
    name: 'Barba',
    price: 20,
    icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
  },
  {
    _id: '3',
    name: 'Sobrancelha',
    price: 15,
    icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
  }
]

export const clients: IClient[] = [
  {
    _id: '1',
    name: 'Vinicius',
    services: [
      {
        'service': {
          _id: '63b75a7f9a5167f88bb1356f',
          name: 'Sobrancelha',
          icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png',
          price: 15,

        },
        _id: '63c5c3602d9d9f0035702eb3'
      },
      {
        'service': {
          _id: '63b75cd7eeb182ccf92c46a0',
          name: 'Cabelo',
          icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png',
          price: 25,
        },
        _id: '63c5c3602d9d9f0035702eb4'
      },
      {
        'service': {
          _id: '63b75d5783496290fa00880f',
          name: 'Barba',
          icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png',
          price: 20,

        },
        _id: '63c5c3602d9d9f0035702eb5'
      }
    ]
  }
]
