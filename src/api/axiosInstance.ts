// src/api/axiosInstance.ts
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Request Interceptor to include the access token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const {token}= useAuth()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add Response Interceptor to handle token expiry and refresh
axiosInstance.interceptors.response.use(
  (response) => response, // pass through if the response is okay
  async (error) => {
    if (error.response.status === 401) {
      // Token expired, try to refresh it
      try {
        const res = await axios.post('http://yourbackend.com/refresh-token', {}, { withCredentials: true });
        const newAccessToken = res.data.accessToken;

        // Retry the original request with the new token
        error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(error.config);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
