import axios from 'axios'
const KEY = 'AIzaSyA-R-67gN0eTTh9Hv2ztWK0OaEOEIJawF0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
})