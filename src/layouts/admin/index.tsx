import React, { useState } from 'react'
import {
  ClockCircleOutlined,
  GlobalOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import './styles.scss'
import logo from '../../assets/images/logo.png'
import avt from '../../assets/images/avatar-2.png'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logoutUser } from 'utils/helpers'
import { MessageCustom } from 'components/UI/Message'
const { Header, Sider, Content } = Layout

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  const navigate = useNavigate()
  const handleLogout = () => {
    logoutUser()
    MessageCustom({
      type: 'success',
      content: 'Đăng xuất thành công!'
    })
    navigate('/admin/login')
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
        <div className='demo-logo-vertical'>
          <img src={logo} alt='logo-check-scam' />
          {collapsed == false && <span className='demo-logo__text'>CHECK SCAM</span>}
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <TeamOutlined />,
              label: <Link to='/admin'>Danh sách Scammer</Link>
            },
            {
              key: '2',
              icon: <ClockCircleOutlined />,
              label: <Link to='/admin/pending'>Đợi duyệt</Link>
            },
            {
              key: '3',
              icon: <GlobalOutlined />,
              label: <Link to='/'>Vào Website</Link>
            },
            {
              key: '4',
              icon: <LogoutOutlined />,
              label: <span onClick={() => handleLogout()}>Đăng xuất</span>
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
          <div className='admin-wrap'>
            <img src={avt} alt='avt-admin' />
            <span>{JSON.parse(localStorage.getItem('user')).name || 'ADMIN'}</span>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
