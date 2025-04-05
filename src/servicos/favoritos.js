import axios from "axios"

const favotitosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
    const response = await favotitosAPI.get('/')

    return response.data
}

async function postFavoritos(id){
    await favotitosAPI.post(`/${id}`)
}

async function deleteFavoritos(id){
    await favotitosAPI.delete(`/${id}`)
}


export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}