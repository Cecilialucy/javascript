import axios, { AxiosResponse } from 'axios'

export type ResponseUser = { name: string, id: number, email: string }

axios.get<Array<ResponseUser>>("http://localhost:3001/users").then((response) => {
    console.log("------response.data-------")
    const resposta = response.data
    console.log(resposta)
})

const joao: ResponseUser = { name: "joão", id: 2, email: "joão@server.com" }

axios.post<ResponseUser>("http://localhost:3001/users", { name: "joao", "email": "joao@2" }).then((response) => {

    console.log(response.data.id)
})

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get("http://localhost:3001/users/" + id)
}

console.log("getUser(3)")
getUser(3).then(({ data }) => console.log(data.name))