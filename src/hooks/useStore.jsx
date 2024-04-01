import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set({ cart: [] }),
  itemCount: () => set((state) => state.cart.length),
}));

export default useStore;
