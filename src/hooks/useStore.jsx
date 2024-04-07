import { create } from "zustand";

/**
 * A custom hook that creates a store for managing shopping cart state using Zustand.
 *
 * @module useStore
 *
 * @returns {object} An object containing the following properties:
 * - `cart`: An array that stores the cart items.
 * - `addToCart`: A function to add a product to the cart. Takes a `product` object as an argument.
 * - `clearCart`: A function to clear all items from the cart.
 * - `itemCount`: A function to retrieve the count of items in the cart.
 */
const useStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set({ cart: [] }),
  itemCount: () => set((state) => state.cart.length),
}));

export default useStore;
