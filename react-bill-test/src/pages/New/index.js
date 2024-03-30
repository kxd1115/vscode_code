import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import Icon from '@/components/icon';
import './index.scss'
import classNames from 'classnames'
import { billListData, billTypeToName } from '@/contants'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { addBillList } from '@/store/modules/billStore';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

const New = () => {
  const navigate = useNavigate();
  // 1. 准备一个控制收入支出的状态
  const [billtype, setBillType] = useState('pay'); // pay->支出 income->收入

  // 收集金额
  const [money, setMoney] = useState(0);
  const moneyChange = (value) => {
    setMoney(value);
  };
  // 收集账单类型
  const [useFor, setUseFor] = useState('');
  const dispatch = useDispatch();
  // 保存账单
  const saveBill = () => {
    // 收集数据
    const data = {
      type: billtype,
      money: billtype === 'pay' ? -money : +money,
      date: date,
      useFor: useFor
    };
    dispatch(addBillList(data));
    navigate('/month'); // 点击保存的同时返回月度账单
  }
  // 存储选择的时间
  const [date, setDate] = useState();
  // 控制时间打开关闭
  const [dateVisible, setDateVisible] = useState(false);
  // 确认选择时间
  const dateConfirm = (value) => {
    setDate(value);
    setDateVisible(false);
  }
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames({'selected': billtype==='pay'})}
            onClick={() => setBillType('pay')}
            >
            支出
          </Button>
          <Button
            className={classNames({'selected': billtype==='income'})}
            shape="rounded"
            onClick={() => setBillType('income')}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>{dayjs(date).format('YYYY-MM-DD')}</span>
              {/* 时间选择器 */}
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
              />
            </div>
            <div className="kaInput">
              <Input 
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billtype].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    // selected
                    <div
                      className={classNames(
                        'item',
                        {'selected': item.type === useFor}
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={
          saveBill
        }>
          保 存
        </Button>
      </div>
    </div>
  )
}

export default New