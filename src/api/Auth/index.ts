import instance from '../callApi'
import { AxiosError } from 'axios'

interface LoginData {
  email: string
  password: string
}

interface LoginResponseData {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive'
  createdAt: any
  updatedAt: any
}

interface ApiResponse<T> {
  status: number
  message: string
  success: boolean
  data: T | null
}

interface ErrorResponse {
  status: number
  message: string
  success: boolean
  data: null
}

class AuthApi {
  static async login(data: LoginData): Promise<ApiResponse<LoginResponseData>> {
    const defaultErrorResponse: ApiResponse<LoginResponseData> = {
      status: 500,
      message: 'An error occurred',
      success: false,
      data: null
    }

    try {
      const response = await instance.post<ApiResponse<LoginResponseData>>('/admin/login', data)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>
        return {
          status: axiosError.response?.status || 500,
          message: axiosError.response?.data?.message || axiosError.message || 'An error occurred',
          success: false,
          data: null
        }
      }
      return defaultErrorResponse
    }
  }
}

export default AuthApi
