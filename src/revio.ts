import axios from 'axios'

import config from './config'

const revio = axios.create({
    baseURL: config.revioBaseUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${config.revioKey}`
    }
}) 

export default revio;