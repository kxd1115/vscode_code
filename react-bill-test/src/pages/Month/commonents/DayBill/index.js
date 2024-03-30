import classNames from 'classnames'
import './index.scss';
import { useMemo, useState } from 'react';
import { billTypeToName } from '@/contants';
import Icon from '@/components/icon';

const DailyBill = ({date, billList}) => {
  const dayResult = useMemo(() => {
    // 支出
    const pay = billList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0);
    // 收入
    const income = billList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0);
    return {
      pay, 
      income,
      // 结余
      total: pay + income,
    }
  }, [billList]);
  // 控制单日列表展开收起
  const [visible, setVisible] = useState(false);
  return (
    <div className={classNames('dailyBill')} >
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow', {'expand' : visible})} onClick={() => setVisible(!visible)}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{dayResult.total.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      <div className="billList" style={{display: visible ? 'block' : 'none'}}>
        {billList.map(item => {
          return (
            <div className="bill" key={item.id}>
              {/* 图标 */}
              <Icon type={item.useFor}></Icon>
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money.toFixed(2)} 
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DailyBill