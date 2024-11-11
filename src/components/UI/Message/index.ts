import { message } from 'antd'

interface MessageCustomProps {
  type: 'success' | 'error' | 'warning' | 'info'
  content: string
}

export const MessageCustom = ({ type, content }: MessageCustomProps) => {
  message[type](content)
  return null
}
