import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getChannelAPI, createArticleAPI } from '@/apis/article';

const { Option } = Select

const Publish = () => {
  const dispatch = useDispatch();
  // 获取频道列表
  const [channelList, setChannelList] = useState([]);
  // 1. 封装函数，调用接口
  const getChannelList = async () => {
    const res = await getChannelAPI();
    setChannelList(res.data.channels);
  };
  useEffect(() => {
    getChannelList();
  }, [])

  // 提交表单
  const onFinish = (formValue) => {
    const {title, content, channel_id} = formValue;
    console.log(formValue);
    // 1. 按照接口文档格式处理收集到的表单数据
    const reqDate = {
      title: title,
      content: content,
      cover: {
        type: 0,
        images: []
      },
      channel_id: channel_id
    };
    // 2. 调用接口提交
    createArticleAPI(reqDate);
  };

  // 上传回调
  const [imageList, setImageList] = useState([]);
  const onChange = (value) => {
    console.log('正在上传中', value);
    setImageList(value.fileList);
  }

  // 切换图片封面类型
  const [imageType, setImageType] = useState(0);
  const onTypeChange = (e) => {
    console.log("切换封面了", e.target.value);
    setImageType(e.target.value);
  }
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          // 控制表单区域的默认值
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {/* value属性在用户选中之后，会自动收集起来作为接口的提交字段 */}
              {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && <Upload
              // 决定选择文件框的外观样式 
              listType="picture-card"
              // 控制显示上传列表
              showUploadList
              action={'http://geek.itheima.net/v1_0/upload'}
              name='image'
              onChange={onChange}
              maxCount={imageType}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            >
            </ReactQuill>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish