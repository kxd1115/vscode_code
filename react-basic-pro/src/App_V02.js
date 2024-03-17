import { useState, useRef, useEffect } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'loadsh'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

//  使用自定义Hook函数封装数据请求
function useGetList() {
  // 获取接口数据
  const [commentList, setCommentList] = useState([]);

  // 使用useEffect请求数据
  useEffect(() => {
    // 请求数据
    async function getList() {
      // 使用axios请求数据
      const res = await axios.get('http://localhost:3001/list');
      setCommentList(res.data);
    }
    getList();
  }, [])

  return [commentList, setCommentList];
}

// 封装一个Item UI组件
function Item({ item, onHandleDel }) {
  return (
    <div className="reply-item">
      {/* 头像 */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            src={item.user.avatar}
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* 用户名 */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* 评论内容 */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* 评论时间 */}
            <span className="reply-time">{item.ctime}</span>  
            {/* 评论数量 */}
            <span className="reply-time">点赞数:{item.like}</span>
            {item.user.uid === user.uid && 
              <span className="delete-btn" onClick={ () => onHandleDel(item.rpid) }>
                删除
              </span>}
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {

  // 使用useState维护defaultList
  //const [commentList, setCommentList] = useState(_.orderBy(defaultList, 'like', 'desc'));

  // 通过自定义Hook函数获取接口数据
  const [commentList, setCommentList] = useGetList();

  // 删除评论
  const handleDel = (id) => {
    // console.log(id);
    // 对commentList进行过滤处理
    setCommentList(commentList.filter(item => item.rpid !== id));
  }

  // 高亮tab
  const [type, setType] = useState('hot');

  const handleType = (type) => {
    setType(type);
    // 基于列表的排序
    if (type === 'hot') {
      //按照点赞排序
      setCommentList(_.orderBy(commentList, 'like', 'desc'));
    } else {
      // 按照最新排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'));
    }
  };

  const inputRef = useRef(null);

  // 发布评论功能
  // 1. 绑定value
  const [textValue, setTextValue] = useState("");
  // 2. 点击发布
  function sendText() {
    if (textValue) {
      // 获取评论内容
      console.log(textValue);
      // 将评论Push进入列表数组中
      let newComment = {
        rpid: uuidv4(), // uuid
        user: {
          uid: user.uid,
          avatar: user.avatar,
          uname: user.uname,
        },
        content: textValue,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),
        like: 0,
      };
      setCommentList([
        ...commentList,
        newComment
      ]);
    };
    // 清空评论区原输入内容
    setTextValue('');
    // 聚焦到发布评论区域
    inputRef.current.focus();
  }
  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map((item) => (
              <span className={classNames('nav-item', {active: type === item.type})}
              onClick={() => handleType(item.type)}
              key={item.type}>
                { item.text }
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={textValue}
              ref={inputRef}
              onChange={(e) => setTextValue(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={sendText}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          { commentList.map((item) => (
            <Item 
             item={item} 
             key={item.id}
             onHandleDel={handleDel}
            >
            </Item>
          )) }
        </div>
      </div>
    </div>
  )
}

export default App