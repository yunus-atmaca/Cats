interface ICatCategory {
  id: number
  name: string
}

interface ICat {
  breeds: any
  height: number
  id: string
  width: number
  categories: ICatCategory[]
  url: string
}

interface IInfo {
  email: string
  familyName: string
  givenName: string
  id: string
  name: string
  photo: string
}

interface IUser {
  idToken: string
  scope: string[]
  serverAuthCode: string
  user: IInfo
}
