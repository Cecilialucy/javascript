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

export default 1 // somente para não dar erro