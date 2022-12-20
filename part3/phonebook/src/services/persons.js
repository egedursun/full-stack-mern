import axios from "axios";

const baseURL = "https://mern-node-js-production.up.railway.app/api/persons"

const getAll = () => {
    const request = axios.get(baseURL)
    console.log(baseURL)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteItem = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(
        response => response.data
    )
}

export default { getAll, create, update, deleteItem };