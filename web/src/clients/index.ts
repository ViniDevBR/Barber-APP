import { IServices, IClient } from '../@types/Clients'

export const servicesTest: IServices[] = [
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

export const clientsTest: IClient[] = [
  {
    _id: '1',
    name: 'Vinicius',
    service: [
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
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
  {
    _id: '2',
    name: 'Vinicius',
    service: [
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
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
  {
    _id: '3',
    name: 'Vinicius',
    service: [
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
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
  {
    _id: '4',
    name: 'Vinicius',
    service: [
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
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
]
