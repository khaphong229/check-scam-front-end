import moment from 'moment'

export const getDayNow = () => {
  return moment().format('DD/MM/YYYY')
}

export const formatTime = (data: string) => {
  return moment(data).format('DD/MM/YYYY')
}
