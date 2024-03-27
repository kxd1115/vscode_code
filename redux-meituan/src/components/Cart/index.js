import classNames from 'classnames'
import Count from '../Count'
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increCount, decreCount, clearCart } from '../../store/modules/takeaway';
import { useState } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector(state => state.foods);

  // 计算总数
  const totalCount = cartList.reduce((a, c) => a + c.count, 0);
  // 计算总价
  const totalPrice = cartList.reduce((a, c) => a + c.count * c.price, 0);
  // 控制购物车打开关闭的状态
  const [visible, setVisible] = useState(false);
  const onShow = () => {
    if (cartList.length > 0) {
      // 点击购物车切换显示和隐藏
      setVisible(!visible);
    }
  }
  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames('cartOverlay', {'visible': visible})}
        onClick={() => setVisible(false)}
      />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div onClick={onShow} className={classNames('icon', {'fill': cartList.length > 0})}>
          {cartList.length > 0 && <div className="cartCornerMark">{totalCount}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {cartList.length > 0 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', {'visible': visible})}>
        <div className="header">
          <span className="text">购物车</span>
          <span 
           onClick={() => {
            dispatch(clearCart());
            setVisible(false); // 清空购物车的同时，关掉购物车
           }}
           className="clearCart"
          >
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            if (!totalCount) {
              // 如果购物车中的总数为0，则直接清空购物车并隐藏购物车
              dispatch(clearCart());
              setVisible(false); 
            }
            // 如果数量为0，则不再在购物车中展示
            // 不确定这里返回Null是否有问题？因为map必须要有返回值，所以这里给了一个null
            if (!item.count) return null;
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => dispatch(increCount({id: item.id}))}
                    onMinus={() => dispatch(decreCount({id: item.id}))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
