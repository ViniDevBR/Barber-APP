import { IServices, IClient } from '../@types/Clients'
//CABELO + BARBA = 40

export const servicesTest: IServices[] = [
  {
    id: '1',
    name: 'Cabelo',
    price: 25,
    icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
  },
  {
    id: '2',
    name: 'Barba',
    price: 20,
    icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
  },
  {
    id: '3',
    name: 'Sobrancelha',
    price: 15,
    icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
  }
]

export const clientsTest: IClient[] = [
  {
    id: '1',
    name: 'Vinicius',
    service: [
      {
        id: '1',
        name: 'Cabelo',
        price: 25,
        icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
      },
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
      },
      {
        id: '3',
        name: 'Sobrancelha',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
  {
    id: '2',
    name: 'Vinicius',
    service: [
      {
        id: '1',
        name: 'Cabelo',
        price: 25,
        icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
      },
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
      },
      {
        id: '3',
        name: 'Sobrancelha',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
  {
    id: '3',
    name: 'Vinicius',
    service: [
      {
        id: '1',
        name: 'Cabelo',
        price: 25,
        icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
      },
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
      },
      {
        id: '3',
        name: 'Sobrancelha',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
  {
    id: '4',
    name: 'Vinicius',
    service: [
      {
        id: '1',
        name: 'Cabelo',
        price: 25,
        icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
      },
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
      },
      {
        id: '3',
        name: 'Sobrancelha',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821012.png'
      }
    ]
  },
]
