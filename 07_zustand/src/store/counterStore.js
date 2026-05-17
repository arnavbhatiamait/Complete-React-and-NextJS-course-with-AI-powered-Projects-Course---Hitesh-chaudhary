import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increase:() => set((state) => ({ count: state.count + 1 })),

    decrease:() => set((state) => ({ count: state.count - 1 })),

    // ! if not using the start function, we can directly pass the object to set
    reset:() => set({ count: 0 }),
    }))