import axios from 'axios';

const xsrfCookieName: string | undefined = document.cookie
  .split(';')
  ?.find((cookie) => cookie.startsWith('csrftoken'))
  ?.split('=')[1];

export default axios.create({
  baseURL: 'http://localhost.com:8000/',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  xsrfCookieName,
});
