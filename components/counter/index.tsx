
import dayjs from 'dayjs'
import React from 'react';
const { useState, useEffect, useCallback, useRef } = React;
import type { DatePickerProps } from 'antd/es/date-picker';
import {Button} from 'antd'


interface Iprops{
    targetTime?: DatePickerProps['value']
}

const Counter = ({ targetTime }: Iprops) => {
    const timer = useRef<any>()
    const [timeLeftStr, setTimeLeftStr] = useState<string | null>(`--小时--分钟--秒`)
    const [pushed, setPushed] = useState<Boolean>(false)
    
    const calcTimeLeft = useCallback(() => {
        if (!targetTime) return
        const curTime = dayjs();
        const hours = dayjs(targetTime).diff(curTime, 'hour')
        const minutes = dayjs(targetTime).diff(curTime, 'minute') - hours * 60
        const seconds = dayjs(targetTime).diff(curTime, 'second') -(hours * 60 + minutes) * 60
        setTimeLeftStr(`${hours}小时${minutes}分钟${seconds}秒`)
    }, [targetTime, setTimeLeftStr])

    const toogleTimer = useCallback((pushed: Boolean) => {
        if (pushed) {
            timer.current = setInterval(calcTimeLeft, 1000)
        } else {
            clearInterval(timer.current)
        }
        setPushed(()=>!pushed)
    }, [setPushed, calcTimeLeft, timer.current])



    useEffect(() => {
        timer.current = setInterval(calcTimeLeft, 1000)
        return ()=> clearInterval(timer.current)
    }, [targetTime, calcTimeLeft])
    
    return <div>
        <div>
            时间剩余: {timeLeftStr}
        </div>
        <div>
            {!targetTime ? <Button>请选择时间</Button> : <Button onClick={
                () => toogleTimer(pushed)
            }>{pushed ? '开始' : '暂停'}</Button>}
        </div>
  </div>
}

export default Counter;
