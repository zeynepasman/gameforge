export interface IPost {
  id: number,
  body: string
  title: string
}
export interface IComment {
  id: number
  body: string
  name: string
  email: string
}
export interface IUser {
  id: number
  name:string
  username:string
  website: string,
  email: string
}
