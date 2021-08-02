import axios from 'axios'

// API endpoint(s)
const BACKEND_URL = 'http://localhost:8080'

const backendInstance = axios.create({
  baseURL: BACKEND_URL,
  proxy: false,
  timeout: 5000
});

export default {
  getEncodedUrl: function (url) {
    const formData = new FormData()
    formData.append('url', url)
    return backendInstance.post('/shortenURL', formData)
  },
  getDecodedUrl: function (code) {
    const formData = new FormData()
    formData.append('code', code)
    return backendInstance.post('/getURL', formData)
  },
  getEncodedCustom: function (custom, url) {
    const formData = new FormData()
    formData.append('custom', custom)
    formData.append('url', url)
    return backendInstance.post('/getCustomURL', formData)
  }
}
