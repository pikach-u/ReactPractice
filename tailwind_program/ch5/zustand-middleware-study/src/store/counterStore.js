import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const useCounterStore = create(
  subscribeWithSelector((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  }))
);

export default useCounterStore;
