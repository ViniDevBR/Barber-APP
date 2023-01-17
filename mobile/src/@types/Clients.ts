export interface IClient {
  _id: string
  name: string
  services: Array<IServices>
}

export interface IServices {
  _id: string
  service: ISelects
}

export interface ISelects {
  _id: string
  name: string
  price: number
  icon: string
}
