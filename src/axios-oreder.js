import axios from 'axios'

const instance = axios.create({
    baseURL:'https://burger-68d8f.firebaseio.com/'
})

export default instance