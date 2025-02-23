import instance from '../callApi'
import { AxiosError } from 'axios'
interface ScammerData {
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
  images?: string[]
}

interface ScammerDetail extends ScammerData {
  id: string
  images: string[]
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

class ScammerApi {
  static async createScammer(data: ScammerData): Promise<ApiResponse<ScammerDetail>> {
    const defaultErrorResponse: ApiResponse<ScammerDetail> = {
      status: 500,
      message: 'An error occurred',
      success: false,
      data: null
    }

    try {
      const response = await instance.post<ApiResponse<ScammerDetail>>('/denunciations', data)
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

  static async getAllScammer(): Promise<ApiResponse<ScammerDetail[]>> {
    const response = await instance.get<ApiResponse<ScammerDetail[]>>('/denunciations')
    return response.data
  }

  static async deleteScammer(id: string): Promise<ApiResponse<null>> {
    const response = await instance.delete<ApiResponse<null>>(`/denunciations/${id}`)
    return response.data
  }

  static async searchScammer(text: string): Promise<ApiResponse<ScammerDetail>> {
    const defaultErrorResponse: ApiResponse<ScammerDetail> = {
      status: 500,
      message: 'An error occurred',
      success: false,
      data: null
    }
    try {
      const response = await instance.get<ApiResponse<ScammerDetail>>(`/denunciations/search/${text}`)
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

  static async updateStatusScammer(id: string): Promise<ApiResponse<ScammerDetail>> {
    const defaultErrorResponse: ApiResponse<ScammerDetail> = {
      status: 500,
      message: 'An error occurred',
      success: false,
      data: null
    }
    try {
      const response = await instance.patch<ApiResponse<ScammerDetail>>(`/denunciations/status/${id}`)
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

export default ScammerApi
