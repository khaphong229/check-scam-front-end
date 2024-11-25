import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, message } from 'antd'
import AuthApi from 'api/Auth'
import { setAuthToken, isAuthenticated } from '../../../utils/helpers'
import { MessageCustom } from 'components/UI/Message'
import styles from './styles.module.scss'

type LoginFormType = {
  email: string
  password: string
  remember?: boolean
}

const Login: React.FC = () => {
  const navigate = useNavigate()

  const onFinish = async (values: LoginFormType) => {
    try {
      const {
        data,
        status,
        message: responseMessage
      } = await AuthApi.login({
        email: values.email,
        password: values.password
      })

      if (status === 200 && responseMessage === 'Success') {
        setAuthToken(data.id, values.remember)
        localStorage.setItem('user', JSON.stringify(data))
        MessageCustom({
          type: 'success',
          content: 'Đăng nhập thành công'
        })
        navigate('/admin')
      } else {
        MessageCustom({
          type: 'error',
          content: 'Đăng nhập không thành công'
        })
      }
    } catch (error) {
      MessageCustom({
        type: 'error',
        content: 'Có lỗi xảy ra trong quá trình đăng nhập'
      })
    }
  }

  const onFinishFailed: FormProps<LoginFormType>['onFinishFailed'] = (errorInfo) => {
    console.log('Login Failed:', errorInfo)
  }

  if (isAuthenticated()) {
    return <Navigate to='/admin' replace />
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>Đăng nhập trang quản trị</h1>

        <Form
          name='login'
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          layout='vertical'
        >
          <Form.Item<LoginFormType>
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}
          >
            <Input className={styles.input} />
          </Form.Item>

          <Form.Item<LoginFormType>
            label='Mật khẩu'
            name='password'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input.Password className={styles.input} />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className={styles.checkbox}>Nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className={styles.submitButton}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
