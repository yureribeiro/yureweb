import axios from "axios"

const api = axios.create({
    baseURL : 'https://api.github.com/users/yureribeiro',
    headers: {
        Authorization: 'Bearer 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'
    }
})

export default api