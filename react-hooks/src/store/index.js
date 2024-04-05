import createCounterStore from "./modules/counterStore";
import createChannelListStore from "./modules/channelStore";
import { create } from "zustand";

const useStore = create((...set) => {
  return {
    ...createCounterStore(...set),
    ...createChannelListStore(...set)
  };
});

export default useStore;