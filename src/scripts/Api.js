import axios from 'axios'

// API endpoint(s)
const BACKEND_URL = 'https://smollink-heroku.herokuapp.com'

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
  },
  isValidUrl: function (str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
}
