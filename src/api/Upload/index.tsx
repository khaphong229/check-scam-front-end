import instance from 'api/callApi'
import { AxiosError } from 'axios'

interface ImageDataResult {
  status: number
  message: string
  success: boolean
  data: string | null
}

class UploadApi {
  static async uploadImage(file: File): Promise<ImageDataResult> {
    const defaultErrorResponse: ImageDataResult = {
      status: 500,
      message: 'An error occurred',
      success: false,
      data: null
    }

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await instance.post<ImageDataResult>('/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<ImageDataResult>
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

export default UploadApi
