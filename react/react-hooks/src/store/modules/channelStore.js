const URL = 'http://geek.itheima.net/v1_0/channels';

const createChannelListStore = (set) => {
  return {
    // 状态数据
    channelList: [],
    fetchChannelList: async () => {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      set({
        channelList: jsonRes.data.channels
      })
    }
  }
}; 
export default createChannelListStore;