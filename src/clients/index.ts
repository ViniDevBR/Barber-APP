export interface IClient {
  id: string
  name: string
  service: Array<IServices>
}

export interface IServices {
  id: string
  name: string
  price: number
  icon: string
}

export const services: IServices[] = [
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
  },
  {
    id: '4',
    name: 'Pigmentação',
    price: 40,
    icon: 'https://cdn-icons-png.flaticon.com/512/1008/1008637.png'
  }
]

export const clients: IClient[] = [
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
      },
      {
        id: '4',
        name: 'Pigmentação',
        price: 40,
        icon: 'https://cdn-icons-png.flaticon.com/512/1008/1008637.png'
      }
    ]
  },
  {
    id: '2',
    name: 'Vini',
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
      }
    ]
  },
  {
    id: '3',
    name: 'Vini',
    service: [
      {
        id: '1',
        name: 'Cabelo',
        price: 25,
        icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
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
    name: 'Vini',
    service: [
      {
        id: '1',
        name: 'Cabelo',
        price: 25,
        icon: 'https://cdn-icons-png.flaticon.com/512/7478/7478480.png'
      },
      {
        id: '4',
        name: 'Pigmentação',
        price: 40,
        icon: 'https://cdn-icons-png.flaticon.com/512/1008/1008637.png'
      }
    ]
  },
  {
    id: '5',
    name: 'Vini',
    service: [
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: 'https://cdn-icons-png.flaticon.com/512/7578/7578754.png'
      },
      {
        id: '4',
        name: 'Pigmentação',
        price: 40,
        icon: 'https://cdn-icons-png.flaticon.com/512/1008/1008637.png'
      }
    ]
  }
]
