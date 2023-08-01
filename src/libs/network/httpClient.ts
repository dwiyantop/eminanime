/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookie from 'js-cookie';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { MOCK_ENDPOINT } from '@/constants/apiEndpoint';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const getAuthToken = (): { accessToken: string; refreshToken: string } => {
  const accessToken = Cookie.get('accessToken') || '';
  const refreshToken = Cookie.get('refreshToken') || '';
  return { accessToken, refreshToken };
};

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { accessToken } = getAuthToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onErrorResponse = async (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    // const { message } = error;
    // const { method, url } = error.config as AxiosRequestConfig;
    // const { statusText, status } = (error.response as AxiosResponse) ?? {};
    const { status } = (error.response as AxiosResponse) ?? {};

    switch (status) {
      case StatusCode.Unauthorized: {
        const { refreshToken } = getAuthToken();

        if (refreshToken) {
          const originalRequestConfig = error.config as AxiosRequestConfig;
          const newHttp = axios.create({
            baseURL: originalRequestConfig.baseURL,
            headers,
            withCredentials: true,
          });
          const response = await newHttp.post(MOCK_ENDPOINT.AUTH_REFRESH_TOKEN, {
            refresh_token: refreshToken,
          });

          if (response.status === 200) {
            const originalRequestConfig = error.config as AxiosRequestConfig;

            const { access_token: newAccessToken, refresh_token: newRefreshToken } = response.data.result;
            Cookie.set('accessToken', newAccessToken);
            Cookie.set('refreshToken', newRefreshToken);

            if (originalRequestConfig.headers) {
              originalRequestConfig.headers.Authorization = `Bearer ${newAccessToken}`;
            } else {
              originalRequestConfig.headers = {
                ...headers,
                Authorization: `Bearer ${newAccessToken}`,
              };
            }
          }
        } else {
          Cookie.remove('accessToken');
          Cookie.remove('refreshToken');
        }

        break;
      }
      case StatusCode.Forbidden: {
        // "Permission denied"
        break;
      }
      case StatusCode.NotFound: {
        // "Not found"
        break;
      }
      case StatusCode.TooManyRequests: {
        // "Too many request"
        break;
      }
      case StatusCode.InternalServerError: {
        // "Internal server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }
  }

  return Promise.reject(error);
};

class Http {
  private instance: AxiosInstance | null = null;
  private baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
      withCredentials: false,
    });

    http.interceptors.request.use(onRequest, onErrorResponse);
    http.interceptors.response.use(onResponse, onErrorResponse);

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return await this.http.get<T, R>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return await this.http.post<T, R>(url, data, config);
  }

  async put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return await this.http.put<T, R>(url, data, config);
  }

  async delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return await this.http.delete<T, R>(url, config);
  }
}

const apiClient = new Http({
  baseUrl: '/api',
});
const mockClient = new Http({
  baseUrl: '/mock',
});

export { apiClient, mockClient };
