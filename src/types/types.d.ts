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
  url:string
}
