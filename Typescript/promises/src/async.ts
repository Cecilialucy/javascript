import axios from 'axios'
import { ResponseUser } from './index'


async function Fn(): Promise<string> {
    return "Uma string qualquer"
}

const fn = Fn()
fn.then(n => console.log("valor de n:" + n))

async function getUser(id: number): Promise<ResponseUser> {
    try {
        const resposta = await axios.get<ResponseUser>("http://localhost:3001/users/" + id)
        console.log(resposta.data)
        return resposta.data
    } catch (e: any) {
        throw new Error("Error message: " + e.message)
    }

}

getUser(10).then(dado => {
    console.log("dado")
    console.log(dado)
}).catch(e => {
    console.log("Ocorreu um erro")
    console.log(e.message)
})
