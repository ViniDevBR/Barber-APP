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
