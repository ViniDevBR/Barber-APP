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
    icon: '../assets/Maquina.png'
  },
  {
    id: '2',
    name: 'Barba',
    price: 20,
    icon: '../assets/bigode.png'
  },
  {
    id: '3',
    name: 'Sobrancelha',
    price: 20,
    icon: '../assets/navalha.png'
  },
  {
    id: '4',
    name: 'Pigmentação',
    price: 40,
    icon: '../assets/tinta.png'
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
        icon: '../assets/Maquina.png'
      },
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: '../assets/bigode.png'
      },
      {
        id: '3',
        name: 'Sobrancelha',
        price: 20,
        icon: '../assets/navalha.png'
      },
      {
        id: '4',
        name: 'Pigmentação',
        price: 40,
        icon: '../assets/tinta.png'
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
        icon: '../assets/Maquina.png'
      },
      {
        id: '2',
        name: 'Barba',
        price: 20,
        icon: '../assets/navalha.png'
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
        icon: '../assets/Maquina.png'
      },
      {
        id: '3',
        name: 'Sobrancelha',
        price: 20,
        icon: '../assets/navalha.png'
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
        icon: '../assets/Maquina.png'
      },
      {
        id: '4',
        name: 'Pigmentação',
        price: 40,
        icon: '../assets/tinta.png'
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
        icon: '../assets/Maquina.png'
      },
      {
        id: '4',
        name: 'Pigmentação',
        price: 40,
        icon: '../assets/tinta.png'
      }
    ]
  }
]
