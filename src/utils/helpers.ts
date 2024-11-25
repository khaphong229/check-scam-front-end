import moment from 'moment'

export const getDayNow = () => {
  return moment().format('DD/MM/YYYY')
}

export const formatTime = (data: string) => {
  return moment(data).format('DD/MM/YYYY')
}

export const setAuthToken = (token: string, remember?: boolean) => {
  if (remember) {
    localStorage.setItem('authToken', token)
  } else {
    sessionStorage.setItem('authToken', token)
  }
}

export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
}

export const isAuthenticated = (): boolean => {
  return !!getAuthToken()
}

export const removeAuthToken = (): void => {
  localStorage.removeItem('authToken')
  sessionStorage.removeItem('authToken')
}

export const logoutUser = () => {
  localStorage.removeItem('authToken')
  sessionStorage.removeItem('authToken')
  localStorage.removeItem('user')
}
