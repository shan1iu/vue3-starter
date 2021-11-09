import axios from 'axios'

const axiosInstance = axios.create({
	timeout: 2_0000
})

axios.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject(error)
	}
)

export default axiosInstance
