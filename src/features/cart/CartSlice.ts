import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CartState {
    contents: {
        [key: string]: {
            name: string;
            price: number;
            imgSrc: string;
            amount: number;
        };
    };
}

const initialState: CartState = {
    contents: {}
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ id: string; name: string; price: number; imgSrc: string }>) => {
            const { id, name, price, imgSrc } = action.payload;
            state.contents[id] = {
                name,
                price,
                imgSrc,
                amount: !state.contents[id] ? 1 : state.contents[id].amount + 1
            };
        },
        remove: () => {},
        increment: () => {},
        decrement: () => {}
    }
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
