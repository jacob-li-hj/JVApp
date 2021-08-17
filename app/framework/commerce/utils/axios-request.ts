import axios from 'axios';

const axiosRequest = axios;
axiosRequest.defaults.timeout = 90000;
axiosRequest.defaults.withCredentials = true;
axiosRequest.defaults.headers.post['Content-Type'] = 'application/json';

axiosRequest.interceptors.request.use();

axiosRequest.interceptors.response.use();

export default axiosRequest;
