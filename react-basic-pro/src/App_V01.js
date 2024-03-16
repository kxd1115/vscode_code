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

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 99,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
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

const App = () => {

  // 使用useState维护defaultList
  const [commentList, setCommentList] = useState(_.orderBy(defaultList, 'like', 'desc'));

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
            <div className="reply-item" key={item.rpid}>
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
                      <span className="delete-btn" onClick={ () => handleDel(item.rpid) }>
                        删除
                      </span>}
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default App