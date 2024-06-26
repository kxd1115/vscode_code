import { NavBar, DatePicker } from 'antd-mobile';
import { useEffect, useMemo, useState } from 'react';
import './index.scss';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import DailyBill from './commonents/DayBill';

const Month = () => {
  // 按月做数据分组
  const billList = useSelector(state => state.bill.billList);
  const monthGroup = useMemo(() => {
    // 返回计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'));
  }, [billList]);

  // 控制弹框的打开和关闭
  const [dateVisible, setVisible] = useState(false);

  // 控制时间显示
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM');
  });

  const [currentMonthList, setMonthList] = useState([]);

  const monthResult = useMemo(() => {
    // 支出
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0);
    // 收入
    const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0);
    return {
      pay, 
      income,
      // 结余
      total: pay + income,
    }
  }, [currentMonthList]);

  // 初始化的时候展示当前月的统计数据
  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM');
    // 边界值控制
    if(monthGroup[nowDate]) {
      setMonthList(monthGroup[nowDate]);
    }
  }, [monthGroup])

  // 确认回调
  const onConfirm = (date) => {
    setVisible(false);
    // 其他逻辑
    const formatDate = dayjs(date).format('YYYY-MM');
    console.log(formatDate);
    // 边界值控制
    if(monthGroup[formatDate]) {
      setMonthList(monthGroup[formatDate]);
    }
    setCurrentDate(formatDate);
  };

  // 当前月，按照日进行分组
  const dayGroup = useMemo(() => {
    // 返回计算之后的值
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'));
    const keys = Object.keys(groupData);
    return {
      groupData,
      keys
    }
  }, [currentMonthList]);

  return (
    <div className='monthlyBill'>
      <NavBar className='nav' backArrow={false}>
        月度收支
      </NavBar>
      <div className='content'>
        <div className='header'>
          {/* 时间切换区域 */}
          <div className='date' onClick={() => setVisible(true)}>
            <span className='text'>
              {currentDate + ''}月账单
            </span>
            {/* 小箭头状态 */}
            <span className={classNames('arrow', {'expand' : dateVisible})}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className='item'>
              <span className='money'>{monthResult.pay.toFixed(2)}</span>
              <span className='type'>支出</span>
            </div>
            <div className='item'>
              <span className='money'>{monthResult.income.toFixed(2)}</span>
              <span className='type'>收入</span>
            </div>
            <div className='item'>
              <span className='money'>{monthResult.total.toFixed(2)}</span>
              <span className='type'>结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker 
            className='kaDate'
            title='记账日期'
            precision='month'
            visible={dateVisible}
            // onCancel={() => setVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 单日列表统计 */}
        {
          dayGroup.keys.map(key => {
            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
          })
        }
      </div>
    </div>
  )
};

export default Month;