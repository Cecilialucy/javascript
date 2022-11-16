function add(x: number, y: number) {
    return x + y
}

const multiply = (x: number, y: number) => {
    return x * y
}

const subtract: (x: number, y: number) => number = (x, y) => x - y

let teste = subtract(3, 1)


type User = {
    name: string,
    id: number
}

type LevelAdmin = "teacher" | "coordenator" | "manager"

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin

let gabriel: UserAdmin = {
    name: "Gabriel",
    id: 0,
    isAdmin: true,
    level: "teacher"
}

type IsAdmin = (user: User) => boolean

const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin

console.log(isAdmin(gabriel)) // true

let maria: User = {
    name: "Maria",
    id: 1
}

console.log(isAdmin(maria)) // false


export default 2
