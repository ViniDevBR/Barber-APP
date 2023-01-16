export interface IClient {
  _id: string
  name: string
  service: Array<IServices>
}

export interface IServices {
  _id: string
  name: string
  price: number
  icon: string
}
