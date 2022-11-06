import axios from "axios"
const params = new URLSearchParams()

const axios_ = axios.create({baseURL:"https://api.themoviedb.org/3", params:{api_key:"4db00bcf6b586a0afd9fb29afa56fa26"}})

export default axios_