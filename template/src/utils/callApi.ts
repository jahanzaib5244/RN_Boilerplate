import axios, {AxiosInstance, AxiosResponse} from 'axios';

// Function to handle successful API responses
const handleSuccess = (response: AxiosResponse): any => {
  // on expire user token dispatch onExpireToken callback and logout user
  return response; // Make sure to return the response so that it can be passed to the .then() block
};

// Function to handle API errors
const handleError = (error: any) => {
  // Do something with the error
  return Promise.reject(error); // Make sure to return a rejected promise so that it can be caught in the .catch() block
};

const callApi = (
  userToken?: string,
  content_type = 'application/json',
): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: 'base url',
    timeout: 15000,
    headers: {
      Accept: 'application/json',
      'Content-Type': content_type,
      Authorization: userToken ? userToken : '',
    },
  });

  // Add response interceptor
  axiosInstance.interceptors.response.use(handleSuccess, handleError);

  return axiosInstance;
};

export {callApi};
