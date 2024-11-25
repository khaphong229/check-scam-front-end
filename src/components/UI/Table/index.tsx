import React, { useState } from 'react'
import { Popconfirm, Table, Tag, Tooltip } from 'antd'
import type { TableColumnsType } from 'antd'
import { createStyles } from 'antd-style'
import './styles.scss'
import { CheckSquareFilled, DeleteFilled, EyeFilled } from '@ant-design/icons'
import { Input } from 'antd'
import type { GetProps } from 'antd'
import ScammerApi from 'api/Scammer'
import { MessageCustom } from '../Message'
import styles from './styles.module.scss'

const { Search } = Input
const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `
  }
})

interface ScammerData {
  id: string
  nameScammer: string
  phoneScammer: string
  bankNumber: string
  bankName: string
  contentReport: string
  nameSender: string
  phoneSender: string
  option: 'victim' | 'helper'
  images: string[]
  createdAt: string
}

interface ScammerDetail extends ScammerData {
  indexNumber: number
}

type SearchProps = GetProps<typeof Input.Search>
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

interface TableCustomProps {
  title: string
  data: ScammerDetail[]
  loading: boolean
  onDataChange: () => void
  isPend: boolean
  onViewDetail: (record: ScammerDetail) => void
}

const TableCustom: React.FC<TableCustomProps> = ({ title, data, loading, onDataChange, isPend, onViewDetail }) => {
  const { styles } = useStyle()

  const handleChangeStatus = async (record: ScammerDetail): void => {
    const { id } = record
    try {
      const response = await ScammerApi.updateStatusScammer(id)
      const { message, status } = response
      if (message === 'Success' && status === 200) {
        MessageCustom({
          type: 'success',
          content: 'Duyệt đơn tố cáo thành công'
        })
        onDataChange()
      }
    } catch (error) {
      MessageCustom({
        type: 'error',
        content: 'Lỗi trong quá trình duyệt đơn tố cáo'
      })
    }
  }

  const handleDeleteScammer = async (record: ScammerDetail) => {
    const { id } = record
    try {
      const response = await ScammerApi.deleteScammer(id)
      if (response.message === 'Success' && response.status === 200) {
        MessageCustom({
          type: 'success',
          content: response.data || 'Xóa thành công'
        })
        onDataChange()
      }
    } catch (error) {
      MessageCustom({
        type: 'error',
        content: 'Lỗi trong quá trình xóa'
      })
    }
  }

  const columns: TableColumnsType<ScammerDetail> = [
    {
      title: 'Id',
      dataIndex: 'indexNumber',
      width: 60
    },
    {
      title: 'Kẻ lừa đảo',
      dataIndex: 'nameScammer',
      width: 150
    },
    {
      title: 'Số tài khoản',
      dataIndex: 'bankNumber',
      width: 150
    },
    {
      title: 'Ngân hàng',
      dataIndex: 'bankName',
      width: 150
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneScammer',
      width: 150
    },
    {
      title: 'Người tố cáo',
      dataIndex: 'nameSender',
      width: 150
    },
    {
      title: 'Ngày tố cáo',
      dataIndex: 'createdAt',
      width: 150,
      render: (date: string) => new Date(date).toLocaleDateString('vi-VN')
    },
    {
      title: 'Thao tác',
      dataIndex: 'actions',
      width: 120,
      render: (_, record) => (
        <div className={`action-btn ${styles.action_group}`}>
          {isPend && (
            <Tooltip title='Xác nhận duyệt'>
              <CheckSquareFilled onClick={() => handleChangeStatus(record)} />
            </Tooltip>
          )}
          <Tooltip title='Xem chi tiết'>
            <EyeFilled onClick={() => onViewDetail(record)} />
          </Tooltip>
          <Popconfirm
            placement='left'
            title='Xóa đơn tố cáo'
            okText='Xóa'
            cancelText='Hủy'
            onConfirm={() => handleDeleteScammer(record)}
          >
            <Tooltip title='Xóa '>
              <DeleteFilled />
            </Tooltip>
          </Popconfirm>
        </div>
      )
    }
  ]

  return (
    <>
      <div className='body-top'>
        <span className='body-top__text'>{title || 'Danh sách Scammer'}</span>
        <div className='body-top__search'>
          <Search placeholder='Tìm kiếm đơn tố cáo' allowClear onSearch={onSearch} style={{ width: 400 }} />
        </div>
      </div>
      <Table<ScammerDetail>
        className={styles.customTable}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Tổng ${total} đơn tố cáo`
        }}
        scroll={{ y: 600 }}
        loading={loading}
      />
    </>
  )
}

export default TableCustom
