import type { NextPage } from 'next'
import React from 'react';
const { useState, useEffect, useCallback } = React;
import dayjs from 'dayjs'
import Counter from '../components/counter'

import { DatePicker, message } from 'antd';
import type { DatePickerProps } from 'antd/es/date-picker';

import styles from '../styles/Home.module.css'


const CounterPage: NextPage = () => {
    const [selectDate, setSelectDate] = useState<DatePickerProps['value']>()
    const onOk = useCallback((value: DatePickerProps['value']) => {
        if (dayjs(value).isBefore(dayjs())) {
            message.warn('请选择一个未来的时间')
            return 
        }
        setSelectDate(value)
    },[setSelectDate]);
  return (
      <div className={styles.container}>
          <div>
              <DatePicker
                  showTime
                  onOk={onOk}
              />
          </div> 
          <div>
              <Counter targetTime={selectDate} />
          </div>
    </div>
  )
}

export default CounterPage
