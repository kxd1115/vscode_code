import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    // 修改状态的同步方法
    setChannels(state, action) {
      state.channelList = action.payload;
    }
  }
});

// 异步请求部分
const { setChannels } = channelStore.actions;

const fetchChannelList = () => {
  return async (dispatch) => {
    // 请求异步数据
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    // 使用同步actionCreater传入异步数据，生成action对象
    dispatch(setChannels(res.data.data.channels));
  }
};

export { fetchChannelList };

const channelreducer = channelStore.reducer;
export default channelreducer;