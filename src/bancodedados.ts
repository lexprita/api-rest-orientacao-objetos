import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores: Autor[] = [
    // new Autor({
    //     nome: 'Lucas',
    //     idade: 32
    // })
]
console.log(autores)
export const posts: Post[] = [
    new Post({
        titulo: 'Meu primeiro post',
        descricao: 'Descrição do meu primeiro post',
        autor: new Autor({
            nome: 'Lucas',
            idade: 32
        })

    })
]