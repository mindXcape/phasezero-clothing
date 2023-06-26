import axios, { AxiosInstance } from 'axios';

interface IUseAxios {
  (): AxiosInstance;
}

const useAxios: IUseAxios = () => {
  const headers = { 'content-type': 'application/json' };

  const axiosCall = axios.create({
    baseURL: process.env.BASE_URL,
    headers,
  });

  axiosCall.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return axiosCall;
};

export default useAxios;
