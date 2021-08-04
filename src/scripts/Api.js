import axios from 'axios'


const localhost = 'http://localhost:8080/'
const cloud = 'https://smollink-heroku.herokuapp.com'
// API endpoint(s)
const BACKEND_URL = cloud

const backendInstance = axios.create({
  baseURL: BACKEND_URL,
  proxy: false,
  timeout: 0
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
    var pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
); // fragment locator
    return !!pattern.test(str);
  },
  selectText: function (node) {
    node = document.getElementById(node);

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
  }
}
