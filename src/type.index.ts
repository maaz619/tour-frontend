export type User = {
  name: string
  email: string
  role: string
  _id: string
}
export type CardType = {
  name: string
  rating: number
  duration: number
  ratingsAverage: number
  ratingsQuantity: number
  secretTour: boolean
  image: string
  _id: string
  imageCover: string
  summary: string
  difficulty: string
  price: number
  locations: []
  slug: string
}
export type LoginType = {
  email: string
  password: string
}
