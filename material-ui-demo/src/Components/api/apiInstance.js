// import axios from "axios";
// const axiosInstance = axios.create({
//     baseURL: `https://jsonplaceholder.typicode.com/`,
//     headers: {
//         "Content-Type": 'application/json'
//     }
// })

// axiosInstance.interceptors.request.use((config) => {
//     const token = "Fake_access_token_123"
//     config.headers.Authorization = `Bearer: ${token}`
//     console.log("Interceptor has add the token")
//     return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     })
// export default axiosInstance


//response interceptors

import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        "Content-Type": 'application/json'
    }
})
const refreshToken = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("New_Access_Token_123");
        }, 2000)
    })
}
let token = "Expired_access_token123"
axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
        console.log("Interceptos has added the headers");
        if(config.headers.Authorization.includes('Expired'))
        {
            const error = new Error("Expired");
            error.response = {status : 401}
            error.config = config
            throw error;
        }
    return config
}, error => Promise.reject(error))

axiosInstance.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config
        if (error.response && error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true
            try {
                console.log("Token expired")
                console.log("Generating new access token")
                let newAccessToken = await refreshToken()
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                token=newAccessToken
                return axiosInstance(originalRequest)
            } catch (refreshError) {
                console.error("Token refresh failed", refreshError);
                alert("Session expired please login again")

            }
        }
        return Promise.reject(error)
    }
);

export default axiosInstance