import classNames from 'classnames'
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndex } from '../../store/modules/takeaway';

const Menu = () => {
  const dispatch = useDispatch();
  // 获取数据，显示菜单
  const { foodsList, activeIndex } = useSelector(state => state.foods);

  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={() => dispatch(setActiveIndex(index))}
            key={item.tag}
            className={classNames(
              'list-menu-item',
              {'active': activeIndex === index}
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
