// const API_KEY = import.meta.env.VITE_APP_API;
const API_KEY = '1';

let rawUrl = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;

if (!rawUrl.startsWith('http')) {
  rawUrl = 'https://' + rawUrl;
}
const API_URL = rawUrl

export {
  API_URL,
}