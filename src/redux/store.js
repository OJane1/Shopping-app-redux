import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import clothes from "./clothesSlice";

export const store = configureStore({
reducer: {
    clothes,
    cart
    },
})