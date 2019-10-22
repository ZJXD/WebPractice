interface IPerson {
  name: string
  age: number
  [propName: string]: any
}

let Nic: IPerson = {
  name: 'Nic',
  age: 25,
}
